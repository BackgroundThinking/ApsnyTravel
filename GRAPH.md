# High-Level Architecture Graph

This document provides a high-level view of the domain entities, data flow, and service boundaries within **ApsnyTravel**.

## System Context

The application follows a **Mock-First** architecture. The frontend is capable of running entirely without a backend (using local constants), but can seamlessly switch to remote APIs via environment variables.

```mermaid
graph TD
    subgraph Client [Frontend Application]
        UI[Pages & Components<br>(No src directory)]
        AutoUpdate[AUTOUPDATE.md<br>(Maintenance Playbook)]
        style AutoUpdate fill:#f9f,stroke:#333,stroke-dasharray: 5 5

        subgraph DataLayer [Data Access Layer]
            TourService["lib/api.ts<br>(Tour & Review Data)"]
            BookingService["lib/booking.ts<br>(Booking Logic)"]
            BrandConfig["lib/branding.ts<br>(Static Config)"]
        end

        subgraph Domain [Domain Models]
            Tour[Tour Entity]
            Review[Review Entity]
            Booking[Booking Payload]
        end
    end

    subgraph Backend [Backend / External]
        RemoteAPI[("Remote API<br>(VITE_API_URL)")]
        BookingEndpoint[("Booking Endpoint<br>(VITE_BOOKING_ENDPOINT)")]
    end

    %% Relationships
    UI -->|Reads| BrandConfig
    UI -->|Fetches Data| TourService
    UI -->|Submits Form| BookingService

    TourService -->|Returns| Tour
    TourService -->|Returns| Review
    BookingService -->|Validates| Booking

    %% Mock vs Remote
    TourService -.->|Fetch (if VITE_API_URL defined)| RemoteAPI
    TourService -.->|Mock Data (Default)| LocalConsts[("constants.ts")]

    BookingService -.->|POST (if VITE_BOOKING_ENDPOINT defined)| BookingEndpoint
    BookingService -.->|Mock Response (if VITE_USE_MOCK=true)| LocalMocks[("Simulated Response")]

    %% Entity Relationships
    Tour -->|Has Many| Review
    Booking -->|References| Tour
```

## Domain Entities

### 1. Tour (`types.ts`)

The core product entity. Represents a guided tour, excursion, or activity.

- **Key Fields**: `id`, `slug`, `region`, `type`, `price_from`, `is_active`.
- **Source**: `constants.ts` (Mock) or `/tours` (API).

### 2. Review (`types.ts`)

Customer feedback attached to a specific tour.

- **Key Fields**: `tourId`, `rating`, `comment`, `author`.
- **Source**: `constants.ts` (Mock) or `/reviews` (API).

### 3. Booking (`lib/booking.ts`)

A transaction request from a user.

- **Key Fields**: `client_name`, `client_contact`, `desired_date`, `tourTitle`.
- **Validation**: Zod schema (`bookingPayloadSchema`).

### 4. Branding (`lib/branding.ts`)

Single source of truth for contact info, social links, and site metadata.

## Service Boundaries

### Tour Service (`lib/api.ts`)

Abstracts data fetching.

- **Mock Mode**: Returns data from `constants.ts` with artificial latency.
- **Remote Mode**: Active if `VITE_API_URL` is set. Fetches from external API.

### Booking Service (`lib/booking.ts`)

Handles lead generation.

- **Validation**: Enforces phone format and future dates.
- **Submission**:
  - Checks `VITE_USE_MOCK`: If `true`, returns mocked success immediately.
  - Checks `VITE_BOOKING_ENDPOINT`: If set, POSTs payload there.
  - Fallback: Defaults to `/api/book` if endpoint is not configured.

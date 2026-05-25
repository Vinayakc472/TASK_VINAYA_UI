# Electrical Systems Validation Dashboard

A small Angular 21 frontend assignment for the Fraunhofer IWES
*Working Student – Software Engineering Frontend* role.

Two reusable UI components — `Button` and `Card` — composed into a lightweight
overview of renewable-energy test campaigns: grid integration, rotor blade,
and drivetrain validation.

## Run

```bash
npm install
npm start          # http://localhost:4200
```

Production build:

```bash
npm run build
```

## Structure
src/app/
├── shared/
│   ├── button/   ← <app-button>: label, variant, disabled, (clicked)
│   └── card/     ← <app-card>: title, content, status, <ng-content>
└── dashboard/    ← demo page composing the two

## Components

### `ButtonComponent`

```html
<app-button label="View details" variant="primary" (clicked)="onClick()" />
```

| Input      | Type                       | Default     |
| ---------- | -------------------------- | ----------- |
| `label`    | `string`                   | `''`        |
| `variant`  | `'primary' \| 'secondary'` | `'primary'` |
| `disabled` | `boolean`                  | `false`     |

Emits `clicked: MouseEvent` when activated (suppressed while `disabled`).

### `CardComponent`

```html
<app-card
  title="Grid Compatibility — FRT Validation"
  content="Voltage dip simulation and grid recovery validation using the HiL-GridCoP emulator."
  status="running"
>
  <app-button label="View details" (clicked)="onViewDetails(card)" />
</app-card>
```

| Input     | Type                 | Default |
| --------- | -------------------- | ------- |
| `title`   | `string`             | `''`    |
| `content` | `string`             | `''`    |
| `status`  | `CardStatus \| null` | `null`  |

`CardStatus` = `'passed' | 'running' | 'failed' | 'warning'`.

The card exposes a default `<ng-content>` slot for action elements. It's a
passive container by design — no card-level click handler — so there is no
event-bubbling collision with the inner button.

## Dashboard

The dashboard shows three validation campaigns drawn from real Fraunhofer IWES
test infrastructure:

- **Grid Compatibility - FRT Validation** on the *HiL-GridCoP* 44 MVA grid emulator
- **Rotor Blade Fatigue Test** in the Bremerhaven blade hall
- **Main Bearing Endurance** at the *Large Bearing Laboratory (LBL)* in Hamburg

Clicking *View details* on a card expands an inline panel with the campaign
report; clicking again (or opening another card) collapses it. Only one
panel is open at a time.

## Background image

`src/styles.scss` loads `public/wind.jpg`. 

## Notes

- Angular 21, standalone components, strict TypeScript, modern control
  flow (`@if`, `@for`).
- No backend, no routing — campaign data lives in `dashboard.component.ts`.
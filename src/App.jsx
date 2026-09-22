import {
  Phone,
  MessageSquare,
  Tv,
  WashingMachine,
  Refrigerator,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
  Wrench,
  Star,
  Navigation,
} from 'lucide-react'

// ——— Swap these with the shop mobile number ———
const PHONE_E164 = '919345494500'
const PHONE_DISPLAY = '+91 93454 94500'
const TEL_HREF = `tel:+${PHONE_E164}`
const WHATSAPP_TEXT =
  'Hi, I need doorstep repair service in Melaputhur'
const WHATSAPP_HREF = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(WHATSAPP_TEXT)}`

const SHOP_NAME = 'k7 ELECTRONICS SERVICES & SALES'
const SHOP_ADDRESS_LINES = [
  'No. 54, Melaputhur',
  'Convent Road, Cantonment',
  'Trichy – 620 001',
]
const SERVICE_RADIUS = 'Melaputhur & nearby 25 km radius'
const WORKING_HOURS = '8:00 AM – 8:00 PM (All 7 Days)'
const INSPECTION_FEE = 500
const MAPS_DIRECTIONS_HREF =
  'https://www.google.com/maps/search/?api=1&query=Mission+Street+White+Town+Puducherry'

const BRANDS = [
  'Samsung',
  'LG',
  'Sony',
  'Mi',
  'Whirlpool',
  'IFB',
  'Godrej',
  'TCL',
  'Panasonic',
  'Haier',
  'OnePlus',
  'RealMe',
]

const SERVICES = [
  {
    title: 'LED & Smart TV Repair',
    icon: Tv,
    issues: [
      'Backlight failure',
      'Blank screen',
      'Vertical / horizontal lines',
      'No power',
      'Sound but no display',
    ],
  },
  {
    title: 'Washing Machine Service',
    icon: WashingMachine,
    issues: [
      'Front load, top load & semi-automatic',
      'Drum noise',
      'Water leak',
      'Spin cycle issue',
      'Does not start / drain',
    ],
  },
  {
    title: 'Refrigerator / Fridge Repair',
    icon: Refrigerator,
    issues: [
      'Not cooling',
      'Gas refill / charging',
      'Compressor issue',
      'Ice maker failure',
      'Excessive noise',
    ],
  },
]

const STEPS = [
  {
    step: '01',
    title: 'Call or WhatsApp Us',
    body: 'Share your appliance issue. We confirm a same-day home visit.',
  },
  {
    step: '02',
    title: 'Doorstep Inspection',
    body: `Nominal ₹${INSPECTION_FEE} visiting fee — waived if you approve the repair.`,
  },
  {
    step: '03',
    title: 'Upfront Quote',
    body: 'Clear price before any work. Genuine spare parts only.',
  },
  {
    step: '04',
    title: 'Pay After Repair',
    body: 'Pay only after successful repair and on-the-spot testing.',
  },
]

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Experienced Local Technician',
    body: 'Melaputhur-based mechanic who knows common local appliance faults.',
  },
  {
    icon: MapPin,
    title: 'Doorstep Service',
    body: 'No carrying heavy TVs, fridges or washing machines. We come to you.',
  },
  {
    icon: CheckCircle2,
    title: 'Low & Transparent Inspection Fee',
    body: `₹${INSPECTION_FEE} inspection. Waived off if the repair is approved.`,
  },
  {
    icon: Wrench,
    title: '100% Genuine Spare Parts',
    body: 'Brand-matched parts with honest pricing — no hidden add-ons.',
  },
]

const REVIEWS = [
  {
    name: 'Priya S.',
    area: 'Lawspet',
    text: 'TV backlight fixed the same evening. Fair price and no pressure to buy extra parts.',
  },
  {
    name: 'Karthik M.',
    area: 'Melaputhur',
    text: 'Washing machine leak repaired at home. Technician arrived within two hours.',
  },
  {
    name: 'Fatima R.',
    area: 'Melaputhur',
    text: 'Fridge not cooling — gas filled and tested on the spot. Very transparent quote.',
  },
]

function StarRow() {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

function CallButton({ className = '', children = 'Call Technician Now' }) {
  return (
    <a
      href={TEL_HREF}
      className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-base font-semibold text-white shadow-sm transition active:scale-[0.98] hover:bg-blue-800 sm:w-auto ${className}`}
    >
      <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
      {children}
    </a>
  )
}

function WhatsAppButton({ className = '', children = 'Send WhatsApp Message' }) {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-base font-semibold text-white shadow-sm transition active:scale-[0.98] hover:bg-emerald-700 sm:w-auto ${className}`}
    >
      <MessageSquare className="h-5 w-5 shrink-0" aria-hidden="true" />
      {children}
    </a>
  )
}

export default function App() {
  return (
    <div className="min-h-svh bg-slate-50 pb-24 text-slate-800 antialiased md:pb-0">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-700 text-white">
              <Wrench className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[15px] font-bold leading-tight tracking-tight text-slate-900">
                k7 ELECTRONICS
              </p>
              <p className="truncate text-xs font-medium text-slate-500">
                Melaputhur Doorstep Service
              </p>
            </div>
          </div>
          <a
            href={TEL_HREF}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-1.5 rounded-lg bg-blue-700 px-3.5 py-2 text-sm font-semibold text-white hover:bg-blue-800"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </a>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
          <div className="mx-auto max-w-5xl px-4 pb-12 pt-8 sm:pb-16 sm:pt-12">
            <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-sky-200 ring-1 ring-white/15">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {SERVICE_RADIUS}
            </p>
            <h1 className="max-w-3xl text-[1.7rem] font-extrabold leading-tight tracking-tight sm:text-4xl sm:leading-tight">
              Fast Doorstep LED TV, Washing Machine & Fridge Repair in Melaputhur
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Expert technician at your doorstep within 2 hours. Honest pricing
              & genuine spare parts.
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {['Same-Day Repair', `₹${INSPECTION_FEE} Inspection Fee`, 'Multi-Brand Experts'].map(
                (badge) => (
                  <li
                    key={badge}
                    className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-sky-100 ring-1 ring-white/15 sm:text-sm"
                  >
                    {badge}
                  </li>
                ),
              )}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CallButton className="sm:min-w-[240px]" />
              <WhatsAppButton className="sm:min-w-[240px]" />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <StarRow />
                <span className="font-semibold text-white">5.0</span>
              </div>
              <p>Google review callouts from Melaputhur homeowners</p>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white" aria-label="Customer reviews">
          <div className="mx-auto grid max-w-5xl gap-4 px-4 py-8 sm:grid-cols-3">
            {REVIEWS.map((review) => (
              <blockquote
                key={review.name}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
              >
                <StarRow />
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  “{review.text}”
                </p>
                <footer className="mt-3 text-xs font-semibold text-slate-500">
                  {review.name} · {review.area}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Services Offered
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Home-visit repair for the appliances Pondicherry families use every day.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{service.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {service.issues.map((issue) => (
                      <li key={issue} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                        {issue}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </section>

        <section className="bg-white" aria-labelledby="process-heading">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
            <h2 id="process-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Transparent Pricing & Process
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
              ₹{INSPECTION_FEE} inspection fee, waived off if repair is approved. No surprise charges.
            </p>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((item, index) => (
                <li
                  key={item.step}
                  className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <span className="text-xs font-bold tracking-widest text-blue-700">
                    STEP {item.step}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                  {index < STEPS.length - 1 && (
                    <span className="pointer-events-none absolute right-3 top-5 hidden text-slate-300 lg:block">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16" aria-labelledby="brands-heading">
          <h2 id="brands-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Brands We Repair
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Multi-brand experts — if it is in your home, we likely service it.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {BRANDS.map((brand) => (
              <li
                key={brand}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
              >
                {brand}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-slate-900 text-white" aria-labelledby="why-heading">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
            <h2 id="why-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
              Why Choose k7 ELECTRONICS
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {REASONS.map((reason) => {
                const Icon = reason.icon
                return (
                  <article
                    key={reason.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <Icon className="h-6 w-6 text-sky-300" aria-hidden="true" />
                    <h3 className="mt-3 text-lg font-bold">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{reason.body}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:grid-cols-2">
          <div>
            <p className="text-lg font-bold text-slate-900">{SHOP_NAME}</p>
            <address className="mt-3 not-italic">
              <p className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
                <span>
                  {SHOP_ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
            </address>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-600">
              <Clock className="h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
              {WORKING_HOURS}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Doorstep service: {SERVICE_RADIUS}
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-900">{PHONE_DISPLAY}</p>
            <div className="mt-4 hidden gap-3 md:flex">
              <CallButton children="Call Now" />
              <WhatsAppButton children="WhatsApp" />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
              Store directions
            </p>
            <div className="mt-3 flex min-h-44 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-100 p-6 text-center">
              <MapPin className="h-8 w-8 text-blue-700" aria-hidden="true" />
              <p className="mt-2 text-sm font-semibold text-slate-800">Map placeholder</p>
              <p className="mt-1 text-xs text-slate-500">
                White Town / Mission Street, Puducherry
              </p>
              <a
                href={MAPS_DIRECTIONS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
        <p className="border-t border-slate-100 px-4 py-4 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {SHOP_NAME}. Doorstep appliance repair in Melaputhur.
        </p>
      </footer>

      <nav
        className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-slate-200 bg-white md:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        aria-label="Quick contact"
      >
        <a
          href={TEL_HREF}
          className="flex min-h-14 items-center justify-center gap-2 bg-blue-700 text-base font-bold text-white active:bg-blue-800"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call Now
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-14 items-center justify-center gap-2 bg-emerald-600 text-base font-bold text-white active:bg-emerald-700"
        >
          <MessageSquare className="h-5 w-5" aria-hidden="true" />
          WhatsApp
        </a>
      </nav>
    </div>
  )
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { site, whatsappUrl } from "@/lib/site";
import {
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  Upload,
  X,
  ArrowRight,
  Trophy,
  TrendingUp,
  Globe2,
  Rocket,
  ChevronDown,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Book a Free Consultation — LeadCore Digital" },
      {
        name: "description",
        content:
          "Book your free digital marketing consultation with LeadCore Digital. Tell us your goals and get a customised growth strategy within 24 hours. No obligation.",
      },
      { property: "og:title", content: "Book a Free Consultation — LeadCore Digital" },
      {
        property: "og:description",
        content:
          "Tell us about your business and get a customised digital marketing strategy within 24 hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/consultation" }],
  }),
  component: ConsultationPage,
});

const INDUSTRIES = [
  "Car Recovery",
  "Mobile Tyre Fitting",
  "Plumber",
  "Electrician",
  "Roofer",
  "Dentist",
  "Lawyer",
  "Restaurant",
  "E-commerce",
  "Real Estate",
  "Chauffeur Service",
  "Construction",
  "Other",
];

const SERVICES = [
  "Google Ads Management",
  "SEO",
  "Website Design",
  "Google Business Profile",
  "Performance Max",
  "Conversion Tracking",
  "Facebook Ads",
  "Instagram Ads",
  "YouTube Ads",
  "Social Media Management",
  "Local SEO",
  "Website Maintenance",
  "Landing Page Design",
  "Monthly Marketing",
];

const BUDGETS = [
  "Under £300",
  "£300 – £700",
  "£700 – £1,500",
  "£1,500 – £3,000",
  "£3,000+",
  "Not Sure Yet",
];

const GOALS = [
  "Generate More Leads",
  "Increase Phone Calls",
  "More Website Traffic",
  "Improve Local Rankings",
  "Increase Sales",
  "Build Brand Awareness",
  "Launch a New Website",
  "Need Marketing Advice",
];

const TRUST_BADGES = [
  { icon: Sparkles, label: "Free Consultation" },
  { icon: ShieldCheck, label: "No Obligation" },
  { icon: Clock, label: "Response Within 24 Hours" },
  { icon: Trophy, label: "Google Ads Experts" },
];

const WHY_US = [
  "Google Ads Specialists",
  "SEO Experts",
  "High-Converting Websites",
  "Transparent Reporting",
  "International Clients",
  "Dedicated Support",
];

const RESULTS = [
  { icon: Phone, label: "164+ Calls Generated" },
  { icon: TrendingUp, label: "Thousands of Qualified Leads" },
  { icon: Globe2, label: "International Clients" },
  { icon: Rocket, label: "Proven Growth Strategies" },
];

function ConsultationPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [contactMethod, setContactMethod] = useState("WhatsApp");
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggle = (list: string[], setList: (v: string[]) => void, val: string) =>
    setList(list.includes(val) ? list.filter((s) => s !== val) : [...list, val]);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = Array.from(e.target.files ?? []);
    const next = [...files, ...list].slice(0, 5);
    setFiles(next);
    e.target.value = "";
  };

  const removeFile = (i: number) => setFiles(files.filter((_, idx) => idx !== i));

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const consent = fd.get("consent");
    if (!name || !email || !consent) {
      setError("Please complete required fields and accept the privacy consent.");
      return;
    }
    if (selectedServices.length === 0) {
      setError("Please select at least one service you're interested in.");
      return;
    }

    const summary = [
      `New Consultation Request`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${fd.get("phone") || "-"}`,
      `Company: ${fd.get("company") || "-"}`,
      `Website: ${fd.get("website") || "-"}`,
      `Industry: ${fd.get("industry") || "-"}`,
      `Services: ${selectedServices.join(", ")}`,
      `Budget: ${fd.get("budget") || "-"}`,
      `Goals: ${selectedGoals.join(", ") || "-"}`,
      `Preferred Contact: ${contactMethod}`,
      `Best Time: ${fd.get("bestTime") || "-"}`,
      `Project: ${fd.get("project") || "-"}`,
    ].join("\n");

    window.open(whatsappUrl(summary), "_blank");
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="absolute inset-0 pointer-events-none" aria-hidden style={{
          background:
            "radial-gradient(60% 40% at 50% 0%, color-mix(in oklab, var(--gold) 18%, transparent), transparent 70%)",
        }} />
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 pt-20 sm:pt-24 pb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-gold font-semibold">
            <Sparkles className="h-3.5 w-3.5" /> Free Consultation
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Let's Grow Your <span className="text-gradient-gold">Business Together</span>
          </h1>
          <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground">
            Tell us about your business and marketing goals. Complete the form below and our
            team will contact you within 24 hours with a customised strategy.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {TRUST_BADGES.map(({ icon: I, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur-md px-4 py-2 text-xs sm:text-sm font-medium"
              >
                <I className="h-4 w-4 text-gold" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 pb-24 grid lg:grid-cols-[1fr_380px] gap-8">
        {/* Form */}
        <div className="relative">
          {submitted ? (
            <div className="rounded-3xl border border-gold/30 bg-surface/60 backdrop-blur-xl p-10 text-center glow-gold">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-gold/15 border border-gold/30 grid place-items-center text-3xl">
                🎉
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold">Thank you!</h2>
              <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                We have received your enquiry and will contact you within 24 hours.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground">
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
                <a href={`tel:${site.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold">
                  <Phone className="h-4 w-4" /> Call {site.phone}
                </a>
              </div>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border/70 bg-surface/50 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/40 space-y-10"
            >
              {/* Personal */}
              <FormSection title="Personal Information" step="01">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field name="name" label="Full Name" required />
                  <Field name="email" label="Business Email" type="email" required />
                  <Field name="phone" label="Phone (with Country Code)" type="tel" placeholder="+44 ..." required />
                  <Field name="company" label="Company Name" />
                  <div className="sm:col-span-2">
                    <Field name="website" label="Website URL (Optional)" type="url" placeholder="https://" />
                  </div>
                </div>
              </FormSection>

              {/* Business */}
              <FormSection title="Business Information" step="02">
                <Select name="industry" label="Industry" options={INDUSTRIES} />
              </FormSection>

              {/* Services */}
              <FormSection title="Services Required" step="03" hint="Select all that apply">
                <MultiSelect
                  options={SERVICES}
                  selected={selectedServices}
                  onChange={setSelectedServices}
                  label="Please Select"
                  itemNoun="Service"
                />
              </FormSection>

              {/* Budget */}
              <FormSection title="Monthly Marketing Budget" step="04">
                <Select name="budget" label="Choose a budget range" options={BUDGETS} />
              </FormSection>

              {/* Goals */}
              <FormSection title="Business Goals" step="05" hint="What matters most to you?">
                <MultiSelect
                  options={GOALS}
                  selected={selectedGoals}
                  onChange={setSelectedGoals}
                  label="Please Select"
                  itemNoun="Goal"
                />
              </FormSection>

              {/* Project */}
              <FormSection title="Tell Us About Your Project" step="06">
                <label className="block">
                  <span className="sr-only">Project details</span>
                  <textarea
                    name="project"
                    rows={5}
                    maxLength={2000}
                    placeholder="Describe your business, current challenges, goals, and anything you'd like us to know."
                    className="w-full rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                  />
                </label>
              </FormSection>

              {/* Contact prefs */}
              <FormSection title="Preferred Contact Method" step="07">
                <div className="flex flex-wrap gap-2.5">
                  {["WhatsApp", "Phone Call", "Email", "Google Meet"].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setContactMethod(m)}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                        contactMethod === m
                          ? "bg-gold text-gold-foreground border-gold"
                          : "border-border bg-surface/60 hover:border-gold/40"
                      }`}
                    >
                      <span className={`h-2 w-2 rounded-full ${contactMethod === m ? "bg-gold-foreground" : "bg-muted-foreground"}`} />
                      {m}
                    </button>
                  ))}
                </div>
                <div className="mt-5">
                  <Select
                    name="bestTime"
                    label="Best Time To Contact"
                    options={["Morning", "Afternoon", "Evening", "Anytime"]}
                  />
                </div>
              </FormSection>

              {/* Upload */}
              <FormSection title="Upload Files (Optional)" step="08" hint="Logo, website screenshot, marketing report — max 5 files">
                <label className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border hover:border-gold/50 bg-background/40 px-6 py-8 cursor-pointer transition">
                  <Upload className="h-6 w-6 text-gold" />
                  <span className="text-sm font-medium">Click to upload or drag files</span>
                  <span className="text-xs text-muted-foreground">PNG, JPG, PDF · up to 5 files</span>
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    accept="image/*,application/pdf"
                    onChange={handleFiles}
                    disabled={files.length >= 5}
                  />
                </label>
                {files.length > 0 && (
                  <ul className="mt-4 grid gap-2">
                    {files.map((f, i) => (
                      <li key={i} className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface/60 px-3 py-2 text-sm">
                        <span className="truncate">{f.name}</span>
                        <button type="button" onClick={() => removeFile(i)} className="text-muted-foreground hover:text-destructive">
                          <X className="h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </FormSection>

              {/* Consent + submit */}
              <div className="space-y-5 pt-2">
                <label className="flex items-start gap-3 text-sm">
                  <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 accent-[color:var(--gold)]" />
                  <span className="text-muted-foreground">
                    I agree to the Privacy Policy and consent to being contacted regarding my enquiry.
                  </span>
                </label>

                {error && (
                  <div className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-gold px-6 py-4 text-base font-semibold text-gold-foreground hover:brightness-110 glow-gold transition"
                >
                  Book My Free Consultation <ArrowRight className="h-5 w-5" />
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Secure · No spam · We reply within 24 hours
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Side panel */}
        <aside className="space-y-5 lg:sticky lg:top-24 self-start">
          <div className="rounded-3xl border border-border/70 bg-surface/50 backdrop-blur-xl p-6">
            <h3 className="font-display text-lg font-bold">Why Businesses Choose LeadCore Digital</h3>
            <ul className="mt-4 space-y-2.5">
              {WHY_US.map((w) => (
                <li key={w} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-gold/25 bg-gradient-to-b from-gold/10 to-transparent p-6">
            <h3 className="font-display text-lg font-bold">Results</h3>
            <ul className="mt-4 space-y-3">
              {RESULTS.map(({ icon: I, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm">
                  <span className="h-9 w-9 rounded-xl bg-gold/15 border border-gold/25 grid place-items-center text-gold shrink-0">
                    <I className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border/70 bg-surface/50 backdrop-blur-xl p-6">
            <h3 className="font-display text-lg font-bold">Contact Information</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-gold">
                  <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-3 hover:text-gold">
                  <Phone className="h-4 w-4 text-gold" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-gold break-all">
                  <Mail className="h-4 w-4 text-gold shrink-0" /> {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Clock className="h-4 w-4 text-gold" /> Mon–Sat · 9:00 AM – 8:00 PM (PKT)
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </SiteShell>
  );
}

function FormSection({
  title,
  step,
  hint,
  children,
}: {
  title: string;
  step: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] font-mono tracking-widest text-gold border border-gold/30 rounded-md px-2 py-1">
          {step}
        </span>
        <h2 className="font-display text-lg sm:text-xl font-bold">{title}</h2>
      </div>
      {hint && <p className="text-xs text-muted-foreground mb-3 -mt-2">{hint}</p>}
      {children}
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="mt-1.5 w-full rounded-xl border border-border bg-background/70 px-4 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
      />
    </label>
  );
}

function Select({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
        {label}
      </span>
      <select
        name={name}
        className="mt-1.5 w-full rounded-xl border border-border bg-background/70 px-4 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
        defaultValue=""
      >
        <option value="" disabled>
          Please select...
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-sm text-left transition ${
        active
          ? "border-gold bg-gold/10 text-foreground"
          : "border-border bg-surface/50 hover:border-gold/40 text-muted-foreground hover:text-foreground"
      }`}
    >
      <span
        className={`h-4 w-4 rounded-md border grid place-items-center shrink-0 ${
          active ? "bg-gold border-gold" : "border-border"
        }`}
      >
        {active && <CheckCircle2 className="h-3 w-3 text-gold-foreground" />}
      </span>
      <span className="truncate">{label}</span>
    </button>
  );
}

function MultiSelect({
  options,
  selected,
  onChange,
  label,
  itemNoun,
}: {
  options: string[];
  selected: string[];
  onChange: (v: string[]) => void;
  label: string;
  itemNoun: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggle = (val: string) => {
    const next = selected.includes(val)
      ? selected.filter((s) => s !== val)
      : [...selected, val];
    onChange(next);
    if (!selected.includes(val) && next.length <= 999) {
      // collapse after each selection per spec
      setOpen(false);
    }
  };

  const display =
    selected.length === 0
      ? label
      : selected.length > 3
        ? `${selected.length} ${itemNoun}s Selected`
        : selected.join(", ");

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`w-full flex items-center justify-between gap-3 rounded-2xl border bg-background/70 px-4 py-3 text-sm text-left transition focus:outline-none focus:ring-2 focus:ring-gold/20 ${
          open ? "border-gold" : "border-border hover:border-gold/40"
        }`}
      >
        <span className={`truncate ${selected.length === 0 ? "text-muted-foreground" : "text-foreground"}`}>
          {display}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-gold shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute z-30 left-0 right-0 mt-2 origin-top rounded-2xl border border-gold/25 bg-surface/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden transition duration-200 ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul role="listbox" className="max-h-72 overflow-y-auto py-2">
          {options.map((opt) => {
            const active = selected.includes(opt);
            return (
              <li key={opt}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => toggle(opt)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition ${
                    active ? "bg-gold/10 text-foreground" : "text-muted-foreground hover:bg-gold/5 hover:text-foreground"
                  }`}
                >
                  <span
                    className={`h-4 w-4 rounded-md border grid place-items-center shrink-0 transition ${
                      active ? "bg-gold border-gold" : "border-border"
                    }`}
                  >
                    {active && <CheckCircle2 className="h-3 w-3 text-gold-foreground" />}
                  </span>
                  <span className="truncate">{opt}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

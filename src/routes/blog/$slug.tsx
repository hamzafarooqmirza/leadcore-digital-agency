import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    return {
      meta: [
        { title: `${title} | LeadCore Digital Blog` },
        { name: "description", content: `${title} — read this digital marketing article on the LeadCore Digital blog.` },
        { property: "og:title", content: title },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
    };
  },
  component: Post,
});

function Post() {
  const { slug } = Route.useParams();
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase());
  return (
    <SiteShell>
      <article className="container mx-auto max-w-3xl px-4 sm:px-6 pt-20 pb-20">
        <Link to="/blog" className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-gold font-semibold">
          <ArrowLeft className="h-3 w-3" /> Back to blog
        </Link>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight">{title}</h1>
        <p className="mt-4 text-muted-foreground">By LeadCore Digital · 6 min read</p>
        <div className="mt-10 prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground">
            This article is part of the LeadCore Digital editorial series — a deep dive into the topic of {title.toLowerCase()}.
          </p>
          <h2 className="font-display text-2xl font-bold mt-10">Why this matters</h2>
          <p className="text-muted-foreground">
            Digital marketing rewards businesses that combine strategy with disciplined execution. In this article we walk through
            our playbook so you can apply the same principles to your business.
          </p>
          <h2 className="font-display text-2xl font-bold mt-10">Want our team to handle this for you?</h2>
          <p className="text-muted-foreground">
            Book a free consultation with our specialists and we'll build a plan tailored to your business.
          </p>
        </div>
        <div className="mt-12">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground glow-gold">
            Book Free Consultation
          </Link>
        </div>
      </article>
    </SiteShell>
  );
}

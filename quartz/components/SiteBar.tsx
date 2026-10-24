// The Sarpedon Society site bar: the full-width header across the top of every
// page, matching the one on the patrol map.
//
// To change the menu, edit SITE_LINKS below. Each path starts at the site root.
// "external: true" marks pages that are not part of this Quartz site (like the
// patrol map). Give those the full address, so the link also works in the local preview.

const SITE_LINKS: { label: string; href: string; external?: boolean }[] = [
  { label: "Prosopography", href: "/Prosopography/" },
  { label: "Dispatches", href: "/PSO-Dispatches/" },
  { label: "Patrol Map", href: "https://sarpedon.org/patrol-map/", external: true },
  { label: "Gato Connections", href: "https://sarpedon.org/gato-connections/", external: true },
  { label: "About", href: "/About" },
]

function isCurrent(slug: string, href: string): boolean {
  const target = href.replace(/^\/|\/$/g, "").toLowerCase()
  const here = slug.toLowerCase()
  return target !== "" && (here === target || here.startsWith(target + "/"))
}

export function SiteBar({ basePath, slug }: { basePath: string; slug: string }) {
  return (
    <header class="ss-sitebar">
      <a class="ss-brand" href={`${basePath}/`}>
        <span class="ss-mark" aria-hidden="true">
          <span>S</span>
          <span>S</span>
        </span>
        <span class="ss-org">The Sarpedon Society</span>
      </a>
      <nav class="ss-nav" aria-label="Site">
        {SITE_LINKS.map((link) => (
          <a
            href={link.external ? link.href : `${basePath}${link.href}`}
            aria-current={isCurrent(slug, link.href) ? "page" : undefined}
            {...(link.external ? { "data-router-ignore": "" } : {})}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export type Highlight = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  n: string;
  name: string;
  sub: string;
  year: string;
  kind: string;
  grad: string;
  url?: string;
  /** Static screenshot path under /public, e.g. "/projects/foo.png" */
  image?: string;
  /** false si el sitio bloquea iframe embedding (X-Frame-Options/CSP). Default: true */
  embeddable?: boolean;
  /** false si el sitio no tiene layout responsive — usamos imagen estática en mobile en su lugar. Default: true */
  responsive?: boolean;
  description: string;
  role: string;
  stack: string[];
  highlights?: Highlight[];
};

export const projects: Project[] = [
  {
    slug: "vida-estudiantil",
    n: "01",
    name: "Vida Estudiantil",
    sub: "Portal de comunidad escolar",
    year: "2025",
    kind: "Portal",
    grad: "linear-gradient(135deg, #ff4d1c, #5a1500)",
    url: "https://vidaestudiantil.um.edu.mx/vidaEstudiantil/",
    image: "/projects/vida-estudiantil.png",
    description:
      "Portal centralizado para la comunidad de la Universidad de Montemorelos. Reemplaza un proceso histórico de Excel, papel y herramientas dispersas con un solo lugar para anuarios digitales, directorio de clubes y ministerios, actividades deportivas e información de instalaciones del campus.",
    role: "Diseño + desarrollo end-to-end. Arquitectura, base de datos, frontend y deployment.",
    stack: ["Next.js", "Supabase", "Tailwind"],
    highlights: [
      { value: "~2,000", label: "Estudiantes UM" },
      { value: "3 meses", label: "Desarrollo" },
      { value: "Excel → portal", label: "Antes era manual" },
    ],
  },
  {
    slug: "laras",
    n: "02",
    name: "Lara's",
    sub: "Sitio de restaurante con menú automatizado",
    year: "2025",
    kind: "Web",
    grad: "linear-gradient(135deg, #fff5ee, #ff7a52)",
    url: "https://laras.duckdns.org/",
    image: "/projects/laras.png",
    description:
      "Sitio web para restaurante con menú totalmente self-serve. La dueña actualiza platillos, precios y disponibilidad desde un panel propio — sin tocar código, sin depender de nosotros, sin esperar a que un desarrollador atienda el cambio.",
    role: "Diseño + desarrollo + CMS. Onboarding del equipo para que mantengan el menú ellos mismos.",
    stack: ["Next.js", "Sanity", "Tailwind"],
    highlights: [
      { value: "1 semana", label: "Desarrollo" },
      { value: "Self-serve", label: "Menú sin código" },
    ],
  },
  {
    slug: "enarm360",
    n: "03",
    name: "ENARM360",
    sub: "Simulador de exámenes ENARM",
    year: "2025",
    kind: "SaaS",
    grad: "linear-gradient(135deg, #d8ff00, #ff4d1c)",
    url: "https://enarm360.com/",
    image: "/projects/enarm360.png",
    responsive: false,
    description:
      "Plataforma de simulación de exámenes ENARM para estudiantes de medicina. Banco de ~60,000 reactivos con explicaciones, simulacros cronometrados, modo multijugador en vivo para competir con otros estudiantes, estadísticas de desempeño y planes de estudio personalizados.",
    role: "Arquitectura del sistema, base de datos de reactivos, motor de simulacros, multijugador en tiempo real, panel de analítica y suscripciones.",
    stack: ["Next.js", "PostgreSQL", "Node", "Stripe"],
    highlights: [
      { value: "~60,000", label: "Reactivos en el banco" },
      { value: "100+", label: "Usuarios" },
      { value: "Multijugador", label: "Simulacros en vivo" },
      { value: "6 meses", label: "Desarrollo" },
    ],
  },
  {
    slug: "prayer-wall",
    n: "04",
    name: "Prayer Wall",
    sub: "Muro global de peticiones de oración",
    year: "2025",
    kind: "Web",
    grad: "linear-gradient(135deg, #0a0a0a, #ff4d1c)",
    url: "https://prayer-wall.duckdns.org/",
    image: "/projects/prayer-wall.png",
    responsive: false,
    description:
      "Muro abierto donde cualquier persona publica una petición de oración y otros usuarios oran por ella — sin registro ni cuenta. Diseñado para flujos rápidos y conversaciones íntimas, con moderación ligera y notificaciones cuando alguien ora por tu petición.",
    role: "Diseño + desarrollo + sistema de moderación. Foco en una UX cálida y accesible.",
    stack: ["Next.js", "Supabase", "Tailwind"],
    highlights: [
      { value: "1 semana", label: "Desarrollo" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

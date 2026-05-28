export const TOP_LEVEL = [
  { id: "project", label: "Tengo un proyecto en mente" },
  { id: "existing", label: "Tengo algo existente y necesito ayuda" },
  { id: "info", label: "Quiero información" },
  { id: "meeting", label: "Quiero agendar una llamada" },
] as const;

export type TopLevelId = (typeof TOP_LEVEL)[number]["id"];

export const PROJECT_TYPES = [
  { id: "web", label: "Página web" },
  { id: "app", label: "App o sistema a la medida" },
  { id: "ecommerce", label: "E-commerce / tienda online" },
  { id: "mobile", label: "App móvil" },
  { id: "other", label: "Otro" },
] as const;

export const TIMELINES = [
  { id: "urgent", label: "Menos de 1 mes" },
  { id: "1-3", label: "1-3 meses" },
  { id: "3-6", label: "3-6 meses" },
  { id: "no-rush", label: "No urge" },
] as const;

export const HELP_TYPES = [
  { id: "bugs", label: "Arreglar bugs" },
  { id: "features", label: "Agregar features" },
  { id: "redesign", label: "Rediseño visual" },
  { id: "migration", label: "Migrar a otro stack" },
  { id: "monthly", label: "Soporte mensual continuo" },
] as const;

export const INFO_TYPES = [
  { id: "pricing", label: "Precios y paquetes" },
  { id: "portfolio", label: "Ver portafolio" },
  { id: "process", label: "Cómo trabajan" },
  { id: "stack", label: "Stack y tecnologías" },
  { id: "other", label: "Otra cosa" },
] as const;

export const MEETING_TYPES = [
  { id: "discovery", label: "Llamada exploratoria (15 min)" },
  { id: "quoting", label: "Cotizar un proyecto (30 min)" },
  { id: "in-person", label: "Presencial (Montemorelos)" },
  { id: "demo", label: "Demo de un proyecto" },
] as const;

type OptionList = readonly { id: string; label: string }[];

const allOptions: Record<string, OptionList> = {
  TOP_LEVEL,
  PROJECT_TYPES,
  TIMELINES,
  HELP_TYPES,
  INFO_TYPES,
  MEETING_TYPES,
};

export function labelOf(list: OptionList, id: string): string | undefined {
  return list.find((o) => o.id === id)?.label;
}

export { allOptions };

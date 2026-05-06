import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Logo size="lg" />
            <p className="text-muted text-sm mt-3">
              Construido en México · {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex gap-8 text-sm font-mono uppercase tracking-widest text-muted">
            <a href="#servicios" className="hover:text-foreground transition-colors">
              Servicios
            </a>
            <a href="#proyectos" className="hover:text-foreground transition-colors">
              Proyectos
            </a>
            <a href="#contacto" className="hover:text-foreground transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

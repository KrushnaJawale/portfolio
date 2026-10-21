import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import certificates from "../main/certificates/certificatesData";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-white px-6 pb-20 pt-32 font-sans text-gray-900">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/#home"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          <ArrowLeft size={17} /> Back to portfolio
        </Link>

        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">Certifications & Credentials</h1>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            A collection of certifications and credentials I have earned.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.id}
              className="carousel-card-enter overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <a
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
                className="block aspect-[1.414/1] overflow-hidden bg-gray-100"
                aria-label={`View ${certificate.title} certificate image`}
              >
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </a>
              <div className="p-5">
                <h2 className="text-lg font-bold">{certificate.title}</h2>
                <div className="mt-3 flex items-center justify-between gap-3 text-sm text-gray-500">
                  <span className="font-medium">{certificate.issuer}</span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {certificate.year}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

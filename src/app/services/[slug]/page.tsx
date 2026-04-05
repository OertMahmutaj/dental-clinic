import { services } from "@/lib/config";

type Props = { params: { slug: string } };

export default async function ServicePage({ params }: Props) {

  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return <div>Service not found</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <button>Rezervo takim</button>
    </div>
  );
}
export default function PageHeader({title, subtitle}) {
  return (
    <div className="page-header container mx-auto">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
    </div>
  )
}

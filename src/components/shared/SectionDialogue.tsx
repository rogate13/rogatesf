export function SectionDialogue({ label, message }: { label: string; message: string }) {
  return (
    <div className="section-dialogue reveal-card" aria-label={`A note from ${label}`}>
      <span className="section-dialogue-mark" aria-hidden="true">RSF</span>
      <div>
        <p className="section-dialogue-label">{label}</p>
        <p className="section-dialogue-message">{message}</p>
      </div>
    </div>
  );
}

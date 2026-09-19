export function SectionDialogue({ label, message, ariaPrefix }: { label: string; message: string; ariaPrefix: string }) {
  return (
    <div className="section-dialogue reveal-card" aria-label={`${ariaPrefix} ${label}`}>
      <span className="section-dialogue-mark" aria-hidden="true">RSF</span>
      <div>
        <p className="section-dialogue-label">{label}</p>
        <p className="section-dialogue-message">{message}</p>
      </div>
    </div>
  );
}

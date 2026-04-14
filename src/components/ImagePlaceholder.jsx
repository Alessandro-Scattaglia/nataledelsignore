function ImagePlaceholder({ label, height = 220, className = "" }) {
  return (
    <div className={`img-placeholder ${className}`} style={{ minHeight: `${height}px` }} role="img" aria-label={label}>
      {label}
    </div>
  );
}

export default ImagePlaceholder;

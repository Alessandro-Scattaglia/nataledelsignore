function IconBase({ title, className = "", children }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			width="20"
			height="20"
			aria-hidden={title ? undefined : true}
			role={title ? "img" : "presentation"}
		>
			{title ? <title>{title}</title> : null}
			{children}
		</svg>
	);
}

export function LocationIcon(props) {
	return (
		<IconBase title="Posizione" {...props}>
			<path
				d="M12 2.5a7 7 0 0 0-7 7c0 5.3 7 12 7 12s7-6.7 7-12a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
				fill="currentColor"
			/>
		</IconBase>
	);
}

export function PhoneIcon(props) {
	return (
		<IconBase title="Telefono" {...props}>
			<path
				d="M7.5 3.5h3l1 4-2 2a14 14 0 0 0 5 5l2-2 4 1v3c0 .6-.4 1-1 1C11.5 17.5 6.5 12.5 6.5 6.5c0-.6.4-1 1-1Z"
				fill="currentColor"
			/>
		</IconBase>
	);
}

export function MailIcon(props) {
	return (
		<IconBase title="Email" {...props}>
			<path d="M3.5 6.5h17v11h-17v-11Zm1.8 1.5L12 12.8 18.7 8H5.3Z" fill="currentColor" />
		</IconBase>
	);
}

export function WhatsappIcon(props) {
	return (
		<IconBase title="WhatsApp" {...props}>
			<path
				d="M12 3a8.5 8.5 0 0 0-7.4 12.7L3 21l5.5-1.5A8.5 8.5 0 1 0 12 3Zm4.4 11.8c-.2.5-1.1 1-1.5 1.1-.4.1-.9.2-2.9-.6-2.4-1-4-3.5-4.1-3.7-.1-.2-1-1.3-1-2.5 0-1.2.6-1.8.8-2 .2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.7.7 1.8.1.2.1.4 0 .6s-.2.3-.4.5-.3.3-.4.5c-.1.2-.2.4 0 .6.2.3.8 1.3 1.8 2 .4.3.8.5 1 .6.3.1.4.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.4.7 1.6.8.2.1.4.2.4.3.1.1.1.7-.1 1.2Z"
				fill="currentColor"
			/>
		</IconBase>
	);
}

export function FacebookIcon(props) {
	return (
		<IconBase title="Facebook" {...props}>
			<path
				d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.7-.1-1.4-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2.1H8.5V14h2.3v7h2.7Z"
				fill="currentColor"
			/>
		</IconBase>
	);
}

export function YoutubeIcon(props) {
	return (
		<IconBase title="YouTube" {...props}>
			<path
				d="M20.5 8.2a2.3 2.3 0 0 0-1.6-1.6C17.5 6.2 12 6.2 12 6.2s-5.5 0-6.9.4a2.3 2.3 0 0 0-1.6 1.6C3 9.6 3 12 3 12s0 2.4.5 3.8a2.3 2.3 0 0 0 1.6 1.6c1.4.4 6.9.4 6.9.4s5.5 0 6.9-.4a2.3 2.3 0 0 0 1.6-1.6c.5-1.4.5-3.8.5-3.8s0-2.4-.5-3.8Zm-10.7 6.1V9.7l4 2.3-4 2.3Z"
				fill="currentColor"
			/>
		</IconBase>
	);
}

export function BankIcon(props) {
	return (
		<IconBase title="Banca" {...props}>
			<path d="M12 3 3 7v2h18V7l-9-4ZM5 11h2v6H5v-6Zm4 0h2v6H9v-6Zm4 0h2v6h-2v-6Zm4 0h2v6h-2v-6ZM3 19h18v2H3v-2Z" fill="currentColor" />
		</IconBase>
	);
}
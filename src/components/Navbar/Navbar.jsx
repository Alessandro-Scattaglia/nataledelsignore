import "./Navbar.css";

import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
	{ to: "/", label: "Home" },
	{ to: "/orari", label: "Orari" },
	{ to: "/contatti", label: "Contatti" },
	{ to: "/carita", label: "Carità" },
	{ to: "/attivita", label: "Attività" },
	{ to: "/oratorio", label: "Oratorio" },
	{ to: "/catechismo", label: "Catechismo" },
	{ to: "/giovani", label: "Giovani" },
	{ to: "/la-chiesa", label: "La chiesa" },
	{ to: "/la-storia", label: "La storia" },
	{ to: "/i-preti", label: "I preti" },
	{ to: "/cpp", label: "CPP" },
	{ to: "/calendario", label: "Calendario" },
];

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsOpen(false);
	}, [location.pathname]);

	return (
		<div className="nav-wrap">
			<div className="nav-topbar">
				<button
					type="button"
					className="menu-toggle"
					aria-label="Apri o chiudi il menu di navigazione"
					aria-expanded={isOpen}
					aria-controls="site-navigation"
					onClick={() => setIsOpen((open) => !open)}
				>
					<span />
					<span />
					<span />
				</button>
			</div>

			<nav id="site-navigation" className={`site-nav ${isOpen ? "is-open" : ""}`} aria-label="Navigazione principale">
				{navItems.map((item) => (
					<NavLink
						key={item.to}
						to={item.to}
						end={item.to === "/"}
						className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
					>
						{item.label}
					</NavLink>
				))}
			</nav>
		</div>
	);
}

export default Navbar;

import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    if (menuOpen && scrollPosition > 100) {
      setMenuOpen(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, menuOpen]);

  const logoScale = Math.max(0.5, 1 - scrollPosition / 500);
  const logoOpacity = Math.min(1, Math.max(0.7, 1 - scrollPosition / 700));
  const navbarOpacity = Math.min(1, scrollPosition / 200);

  const brands = [
    {
      title: "Crystal",
      description:
        "Founded in 1971, Crystal innerwear is one of India’s leading knitwear brands, offering premium undergarments for all age groups. With over 40 years of manufacturing expertise and a vertically integrated production system, Crystal delivers comfort, durability, and quality you can trust. Designed to meet the needs of modern families, Crystal stands out for its innovative designs and reliable fit.",
    },
    {
      title: "Dixcy",
      description:
        "Dixcy innerwear is designed for dynamic lifestyles. Crafted with breathable, stretchable fabric, it moves with you, supports you, and keeps you comfortable all day long. Whether you're working hard or relaxing at home, Dixcy delivers innerwear that fits, performs, and inspires confidence. Ideal for men and women who demand performance and everyday comfort in one.",
    },
    {
      title: "VIP",
      description:
        "VIP Innerwear is known for its superior quality, comfort, and a style quotient that sets it apart. With a diverse range of products for men and women, VIP combines innovative fabric technology with fashion-forward design. Trusted for generations, VIP remains a go-to brand for comfortable and stylish innerwear in India.",
    },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleNavClick = () => setMenuOpen(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      "entry.2005620554": business,
      "entry.1045781291": email,
      "entry.1166974658": phone,
      "entry.839337160": message,
    });
    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeKsbjcITwihdcKLY-324-exXEUzQfN4oBOYEdS1G0Vqqy90A/viewform?usp=pp_url&" +
      queryParams.toString();
    window.open(formURL, "_blank");
    setBusiness("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Parvath Industries</title>
        <meta
          name="description"
          content="Parvath - Distributor of Crystal, Dixcy, VIP innerwear brands in Chennai"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav
          className={styles.navbar}
          style={{
            backgroundColor:
              scrollPosition > 50
                ? "rgba(89, 9, 42, 0.95)"
                : "rgba(89, 9, 42, 0)",
            boxShadow:
              scrollPosition > 50 ? "0 2px 10px rgba(0,0,0,0.2)" : "none",
            transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            visibility: navbarOpacity > 0.1 ? "visible" : "hidden",
          }}
        >
          <div className={styles.navContainer}>
            <div className={styles.navLinks}>
              <a href="#about" onClick={handleNavClick}>
                About
              </a>
              <a href="#brands" onClick={handleNavClick}>
                Brands
              </a>
              <a href="#contact" onClick={handleNavClick}>
                Contact
              </a>
            </div>
            <div
              className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              role="button"
              tabIndex={0}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div
            className={`${styles.mobileMenu} ${menuOpen ? styles.isOpen : ""}`}
          >
            <div className={styles.mobileMenuLinks}>
              <a href="#about" onClick={handleNavClick}>
                About
              </a>
              <a href="#brands" onClick={handleNavClick}>
                Brands
              </a>
              <a href="#contact" onClick={handleNavClick}>
                Contact
              </a>
            </div>
          </div>
        </nav>

        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div
              className={styles.logoContainer}
              style={{
                position: scrollPosition > 100 ? "fixed" : "relative",
                top: scrollPosition > 100 ? "0" : "auto",
                left: scrollPosition > 100 ? "0" : "auto",
                width: scrollPosition > 100 ? "100%" : "auto",
                backgroundColor:
                  scrollPosition > 100 ? "#59092A" : "transparent",
                boxShadow:
                  scrollPosition > 100 ? "0 2px 10px rgba(0,0,0,0.2)" : "none",
                zIndex: 99,
                textAlign: "center",
                padding: scrollPosition > 100 ? "0.75rem 0" : "0",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <h1
                className={styles.title}
                style={{
                  transform: `scale(${logoScale})`,
                  opacity: logoOpacity,
                  letterSpacing: `${0.4 + (1 - logoScale) * 0.1}em`,
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  margin: 0,
                  color: "#F79C00",
                }}
              >
                PARVATH
              </h1>
            </div>
            <h2
              className={styles.tagline}
              style={{
                opacity: Math.max(0, 1 - scrollPosition / 150),
                transform: `translateY(${scrollPosition / 5}px)`,
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              WE DISTRIBUTE
            </h2>
          </div>
        </div>

        <section id="about" className={styles.aboutBox}>
          <h2>About Us</h2>
          <div className={styles.separator}></div>
          <p>
            Parvath is a reliable multi-brand online store offering 100%
            authentic products from leading innerwear brands like Dixcy,
            Crystal, and VIP — all at affordable prices. By eliminating
            middlemen and selling direct to customers, we pass the savings
            directly to you. We are committed to maintaining full stock
            availability, ensuring that all sizes and colors of our products are
            accessible at all times. Whether you&apos;re looking for everyday
            comfort or premium-quality innerwear, Parvath delivers genuine
            branded products at unbeatable value.
          </p>
          <p>
            Why Choose Parvath? Guaranteed authenticity from trusted brands.
            Wide selection with consistent stock availability. Affordable
            innerwear for men, women, and kids.
          </p>
        </section>

        <section id="brands" className={styles.brandsSection}>
          <h2>Our Brands</h2>
          <div className={styles.separator}></div>
          <div className={styles.brandGrid}>
            {brands.map((brand, index) => (
              <div key={index} className={styles.brandCard}>
                <h3>{brand.title}</h3>
                <div className={styles.brandSeparator}></div>
                <p>{brand.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.contactSection}>
          <h2>Contact Us</h2>
          <div className={styles.separator}></div>
          <p>Reach out to us for distribution inquiries:</p>
          <form className={styles.contactForm} onSubmit={handleFormSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Business Name"
                required
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
              />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <textarea
                placeholder="Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit">Send Inquiry</button>
          </form>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>
            © {new Date().getFullYear()} Parvath Industries. All rights
            reserved.
          </p>
          <div className={styles.footerLinks}>
            <a href="#about">About</a>
            <a href="#brands">Brands</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

# Walnut & Grain — Home Page 1

Open index.html in a current browser. No installation or build is needed. This delivery includes Home Page 1, a redesigned Home Page 2, and About Us; remaining pages are deferred until your review. Navigation links point to matching Home Page sections, with Home 1 / Home 2 links between the two completed pages.

## Included
All 13 homepage sections, an additional enquiry section, light/dark mode with system preference and saved choice, saved RTL choice, accessible mobile menu, service detail dialogs, keyboard/touch range comparison, native FAQ accordion, form validation, local photo previews, enquiry text download, scroll-to-top, subtle reveals and reduced-motion support. Bootstrap 5 is bundled locally; custom CSS controls the editorial layout.

## Image replacement
The brief prohibits downloading or generating final photographs. Every image is a neutral JPG placeholder with a valid local path. Replace the files below using the same name. Do not use unrelated pictures as a restoration pair.

- assets/images/page-headings/home-1-hero.jpg — Home Page 1 hero background; CSS uses --page-heading-image, background-size: cover. Desktop is centered; mobile uses 60% center. No dark overlay obscures the photograph. The hero headline sits alongside the picture for readability.
- assets/images/content/craftsmanship.jpg — craftsperson working
- assets/images/content/french-polishing.jpg — traditional polishing
- assets/images/content/restoration.jpg — furniture restoration
- assets/images/content/surface-repair.jpg — surface damage treatment
- assets/images/content/furniture.jpg — furniture collection
- assets/images/content/workshop.jpg — workshop
- assets/images/content/shellac.jpg — shellac/polishing pad
- assets/images/gallery/dining-table-before.jpg
- assets/images/gallery/dining-table-after.jpg

Use 1400 × 900 or an equivalent aspect ratio. Update alt text in index.html to describe your actual images. Remove .image-note labels and the hero placeholder caption after adding final photography. Replace the comparison project copy with real project details. The two comparison placeholders are intentionally distinct neutral tones; they are not claimed to be genuine results.

## Customization
CSS variables at the top of assets/css/style.css control palette and dark mode. Two system font stacks are used: Trebuchet MS for headings at weight 600 and Verdana for body/UI at weight 400–500, with no remote font dependency. You can replace them with licensed DM Serif Display and Inter local files. Desktop/tablet horizontal padding is 30px; small mobile uses 18px. Matching cards stretch naturally without clipping content. RTL changes document direction; the comparison remains spatially left/right with an accessible labeled control.

## Forms and integrations
The enquiry is frontend-only. Data remains in the browser; there is no backend, email delivery, authentication, payment or confirmed booking. Photo previews accept up to five JPEG/PNG/WebP files, each up to 5 MB. The downloaded text lists photo filenames but does not embed photographs. Connect an approved Formspree/Netlify Forms endpoint and revise the demo wording only when actual submission is configured. Add booking, map, newsletter and notification integrations on their relevant future pages. Do not publish fake contact details or availability.

## SEO
Title, description, Open Graph title/description/type and one H1 are included. Before production, insert your real canonical URL and matching og:url/og:image. LocalBusiness structured data and a production sitemap require verified business details and a deployment domain; these are deferred rather than invented. Update robots.txt and sitemap.xml before hosting.

## Content
Brand, project copy, customer stories and GBP starting prices are fictional editable template content. Reviews and prices are labeled accordingly. No qualifications, awards, years of operation or ratings are asserted.

## Testing
JavaScript syntax, unique element IDs, internal navigation targets, asset existence, JPG integrity, one H1 and all homepage sections checked programmatically. Browser rendering, keyboard behavior, all breakpoints, color contrast measurements, Lighthouse and cross-browser validation were not executed because browser QA is unavailable in this environment.

Please review widths 375, 430, 768, 1024, 1280, 1440 and 1920 px in light/dark and LTR/RTL. Check menu, dialogs, comparison, FAQs and form validation. Large desktop uses three cards, tablet two with a full-width third card, mobile one. No claim of a Lighthouse score is made.

## Credits / License
Original layout, writing, CSS, JS and neutral placeholder JPGs created for this project. Bootstrap 5 (MIT) is bundled in assets/vendor/bootstrap.min.css, retaining its license banner. Reference reviewed for industry context: https://www.essexfrenchpolishing.co.uk/ . No reference photographs, branding, testimonials, prices or code copied.

## Changelog
2026-10-09: Home Page 1 initial delivery. Remaining pages and their dedicated background assets will be added individually after review.

2026-10-09 update: strict black/white/royal violet (#7546E8) palette, new font styles, heading weight 600, body weight 400–500. All image paths and page sections preserved. Neutral placeholders recolored to black/white. CSS has only three color literals; Bootstrap is bundled but its defaults are overridden for this page.

2026-10-09 alignment fix: image/text split sections stretch to matching column heights, comparison fills its adjacent text height, process headings reserve two lines to align paragraph baselines. Mobile images retain their natural aspect ratio. Screenshot-based CSS correction; browser rendering remains unverified.

2026-10-09: enquiry introduction expanded with assessment guidance to balance form height; FAQ rows now full available width. Home Page 2 added with 12 requested studio content sections plus an enquiry form, a distinct editorial hero and home-2-hero.jpg. Additional replaceable JPG paths: content/studio-story.jpg, antique-study.jpg and team-portrait.jpg. Both pages share theme, direction, comparison and form behavior. Automated link/asset/HTML structure and JS syntax checks passed. Browser rendering remains unverified.

2026-10-09 review update: Home 2 substantially rewritten with distinct studio copy and section compositions. Both homepages grouped in a native keyboard-accessible Home dropdown. Enquiry form final button aligns to the guidance column bottom at desktop. About Us added at about.html with a dedicated page-headings/about-heading.jpg placeholder. Its new images use content/about-story.jpg, about-technique.jpg and about-team-1.jpg through about-team-3.jpg. Shared JS now safely ignores controls absent from individual pages. All three pages passed programmatic link, ID, local asset and H1 checks; JS syntax passed. Browser visual testing was not available.

2026-10-09: Home 2 team image matches adjacent text height. Mobile header separates brand/menu from theme/RTL. Services page added with 12 detail dialogs, FAQs and services-heading.jpg. Four-page link and asset checks passed; browser layout unverified.

2026-10-09 mobile header revision: at widths up to 639px the existing Dark/Light and RTL controls move inside the hamburger navigation. The extra controls row is removed from the closed header. Above mobile the same controls return to the header. No duplicate IDs or duplicate toggle controls added. JS syntax check passed; browser rendering unverified.

2026-10-09: French Polishing Service Details added at service-details.html, with dedicated service-details-heading.jpg, process, materials, comparison, limitations, pricing explanation, FAQs, related services and enquiry links. French Polishing cards now link to this page. Five-page link/asset/HTML checks and JS syntax passed; browser rendering unverified.

2026-10-09: footer spacing reduced on desktop/mobile; feature titles reserve matching lines at tablet/desktop. Secondary button hover/focus text explicitly set for readability in both themes. Gallery added at gallery.html with nine category controls, eight accessible range comparisons and 16 separate JPG paths (before/after), neutral placeholder project studies, and gallery-heading.jpg. Six-page link/asset/HTML checks and JS syntax passed; browser layout and runtime interaction checks unverified.

2026-10-09: pricing.html added with nine illustrative GBP service categories, cost factors, demo estimate calculator, quotation checklist, FAQs and assessment CTA. Dedicated background: page-headings/pricing-heading.jpg. Calculator uses sample starting prices multiplied by scope, preparation and work-setting choices, rounded to £5; upper demo range is 30% higher. No actual quote or booking is created. Seven-page asset/link/HTML checks and JS syntax passed; browser rendering remains unverified.

2026-10-09: pricing factor cards stay paired at tablet widths with matching title/row heights. booking.html added with five-step local request flow, per-step validation, local photo previews, preferred date/time, integration placeholder, review and text download. Image bytes are not in the download; no request is sent or appointment confirmed. Dedicated heading: page-headings/booking-heading.jpg. Quote links now open booking.html. Eight-page link/asset/HTML checks and booking JS syntax passed; browser interaction/rendering remains unverified.

2026-10-09: blog.html added with featured article, ten original article previews, search, four topic categories, six-per-page pagination, empty state and accessible reading dialogs. Blog Details remains the next page. Dedicated heading: page-headings/blog-heading.jpg; article images use content/blog-*.jpg placeholders. Journal access added to footers. Nine-page link/asset/HTML checks and blog JS syntax passed; browser rendering and runtime interactions unverified.

2026-10-09 Blog slider revision: existing article cards now form a horizontal scroll-snap slider with swipe, Previous/Next buttons and arrow-key support. Three cards on desktop, two on tablet, one on mobile. Search/category filtering retained; filtered articles are all available in the slider and numeric pagination removed. Article text, image paths and dialogs unchanged. Slider structure and JS syntax checks passed; browser rendering unverified.

2026-10-09: blog-details.html added as a reusable article page for all ten entries via ?article=0..9, with unique heading background blog-details-heading.jpg, editorial byline/date/read-time, image, article headings, sidebar table of contents/categories, related posts, previous/next and sharing/copy controls. Local file sharing explains that a public URL requires hosting. Blog slider links now open full details; preview dialogs removed. Ten-page link/asset/HTML and JS syntax checks passed; browser rendering and interactions unverified.

Blog Details layout review: article content now spans the available section width. Share and article navigation actions are centered. The former side column is a three-card row below the article (stacked on mobile), removing the unused space beside the reading content. HTML, JavaScript, and article content are unchanged.

Article screenshot review: three numbered text cards, balanced image and supporting article introduction, and breadcrumbs removed from every page heading. Existing article links and controls retained.

Contact Us (`contact.html`): contact introduction and three detail cards, appointment hours and illustrative Essex service area, validated local enquiry form with downloadable text, map integration placeholder, FAQs, assessment CTA. Contact details are fictional and must be replaced. Replace `assets/images/page-headings/contact-heading.jpg` for the heading background. Add a real Google Maps embed inside `.contact-map` after confirming the actual workshop address. Integrate `assets/js/contact.js` with a real form endpoint to send messages; the supplied frontend does not send them. Shared navigation now opens Contact Us. Article share buttons centered beneath their label.

Contact form review: full-width themed inputs, stacked labels, two desktop columns, one tablet/mobile column, full-row service selector and message field, accessible helper text, aligned consent, centered actions. Whitespace validation focuses the affected field. Editing clears the previously prepared download so the enquiry cannot silently become stale.

Contact spacing review: the studio-details card spans the entire second row on tablet, with its heading and contact details arranged in two balanced columns. Desktop retains three cards; mobile retains stacked cards.

Contact review: added three practical enquiry-preparation steps beside the form to use the empty area. Replaced the map placeholder with an interactive Google Maps embed of Los Angeles, California and an external map link. The map shows the city, not a claimed workshop address. Existing fictional contact/service-area details remain editable. The map requires internet access; no API key is needed for this embed. A live map load was not verified in this environment.

Contact form lower-box review: added a compact “Keep your enquiry ready” panel below the actions, with download preparation, transport and surface-care guidance to use the remaining space. Form controls and submission behavior retained.

Contact height review: the information and form columns now use matching bordered panels stretched to the same grid-row height, with consistent padding and lower-edge spacing. On mobile each panel follows its own content height. No HTML or JavaScript changed.

Tablet studio-details alignment: explicitly positioned the eyebrow above the heading, with contact information aligned alongside the heading and the demo note beneath it. CSS-only change.

Login (`login.html`): responsive studio introduction and sign-in panel, email/password validation, accessible Show/Hide password toggle, optional remembered email, password-recovery status, return-home and assessment links. Shared footer includes Login. `assets/images/page-headings/login-heading.jpg` is the replaceable background. `assets/js/login.js` does not authenticate, send password resets, save passwords, or create sessions. Connect it to an authentication provider for production. Registration is the next page and is not linked until available.

Register (`register.html`): name, email, phone, password and confirmation fields; matching-password validation, independent accessible password visibility buttons, required preview terms acceptance and a terms dialog. Login and Register link to each other and appear in the shared footer. Replace `assets/images/page-headings/register-heading.jpg` for the heading. `assets/js/register.js` checks inputs locally, clears passwords after valid submission, and does not send/save information or create accounts. Real registration requires an authentication service and production terms.

Register alignment review: the introduction now starts level with the form’s inner content on desktop/tablet, instead of being vertically centered. CSS-only alignment fix.

404 (`404.html`): branded error message, Home and Services actions, Contact link, three useful navigation cards, full-width CTA and shared theme/RTL/navigation controls. Replace `assets/images/page-headings/404-heading.jpg` for its unique background. To show it for missing URLs, configure your hosting platform to serve this page with HTTP status 404. Opening it locally previews the design; it does not configure hosting. The page uses noindex metadata.

Coming Soon / Maintenance (`coming-soon.html`): final required page, with dedicated background, maintenance message, contact/home links and three useful routes. No fabricated launch date or countdown. All 15 required HTML pages are now present. Configure your host separately if this should temporarily replace the landing page.

Visible copy cleanup: removed image replacement labels, footer template labels, editable-story notes and development suggestions across pages. Account and form messages use concise availability/download wording without claiming a backend operation succeeded. Imagery, prices, team information and testimonials remain illustrative source content and must be reviewed before a real business publication. All backend integration instructions remain here rather than in the site layout.

Register/footer spacing review: registration fields use a compact two-column layout on desktop; introduction benefits share the available height and its link aligns near the panel bottom. Footer helpful links use two subcolumns on tablet/desktop to reduce the tall single list; footer columns stretch equally. Mobile remains stacked. CSS-only change.

Registration layout review: introduction and benefit cards now form a full-width block above a separate centered registration panel. Removed the stretched side-by-side composition. Footer review: removed bottom-pinned CTA spacing and aligned the lower tablet columns from the top. CSS-only changes; all content and interactions retained.

Footer screenshot review: tablet helpful links now use a single aligned vertical list; footer columns start consistently and the bottom links leave clearance for the floating scroll control. Added branded violet/white W favicon assets (`favicon.svg`, `favicon.ico`, `favicon.png`) and icon links to all 15 pages. Browser tab icons may require a hard refresh after replacing files.

Footer link review: Explore and Helpful information each have exactly six essential links across all 15 pages. Removed the duplicate aftercare link and added Home and Contact to Explore. Both columns use identical heading spacing and link-row dimensions. Existing page sections and functionality retained.

Footer spacing review: reduced desktop link-row height, heading-to-link gaps, top/bottom padding and bottom-divider spacing. All six links remain in each column. Tablet/mobile retain 44px link touch targets. CSS-only change.

Footer content review: added a short restoration description below the brand and assessment-preparation guidance in the final column to balance the shorter outer columns. Both six-link lists remain unchanged.

Navigation/motion review: header links identify the current page using aria-current and a primary-color underline. Home dropdown indicates Home 1/2; Service Details highlights Services. Clicks update active styling immediately, and page loads restore it from the URL. Added restrained entrance movement and card/link hover movement, including dynamically inserted article cards. Content remains visible without JavaScript; prefers-reduced-motion disables motion.

Login height alignment: information column now starts level with the form content instead of being vertically centered; both columns stretch within the same row and the information link aligns at the lower edge. Scoped to Login, with natural stacked heights on mobile. CSS-only change.

Login separation review: introduction and benefit cards now occupy a full-width block above a separate centered sign-in panel, matching the Register presentation. Existing content, controls and behavior retained. CSS-only change.

# SparkPawsCare — Image Prompts

Detailed prompts for every image placeholder on the site. Designed for high-end AI image generators (Midjourney v6+, ChatGPT/Gemini Nano Banana, FLUX 1.1 Pro, Imagen 3). Each prompt is engineered to produce a cohesive visual identity: warm, editorial, premium pet brand — never stocky, never overly saturated, never AI-slop.

## Global style guardrails

Apply these to every prompt unless noted otherwise:

- **Aesthetic:** warm editorial photography in the style of *Apartment Therapy* meets *The Kinfolk Pet* — natural light, slightly desaturated color grade, gentle film grain, soft contrast.
- **Color palette:** warm cream, soft navy (#344D79), terracotta (#C97B5A), natural wood, off-white linen. Avoid neon, saturated reds, oversharpened whites.
- **Composition:** rule-of-thirds, comfortable negative space (intended for headlines or text overlay), shallow depth of field, eye-level or low angle for animal subjects.
- **Lighting:** soft, directional, natural — golden hour, soft morning window light, or diffused overcast. Avoid harsh midday sun or studio strobes.
- **Animals:** real, expressive, never anthropomorphized. Genuine eye contact. No costumes unless the article calls for it (harness, booties). No exaggerated cuteness.
- **People:** when present, only hands, legs, or out-of-focus shoulders. No faces. Diverse skin tones implied through hand shots.
- **Resolution:** generate at 2048×1280 minimum, then downscale.
- **Format:** photorealistic photography. **Never illustrations, cartoons, 3D renders, or "anime."**
- **Reject in negative prompt:** `cgi, render, illustration, cartoon, painting, oversaturated, blurry, low quality, watermark, text, logo, deformed paws, extra limbs, distorted face, uncanny, frog-eye dog, anthropomorphic, AI face, plastic skin`

When using Midjourney syntax: append `--ar 16:9 --style raw --stylize 200 --v 6.1` for hero/article covers. For card thumbnails use `--ar 16:10`. For square crops use `--ar 1:1`.

---

## HOMEPAGE

### `hero-home` — Homepage hero image (large, 4:3 aspect)

> A golden retriever, healthy adult, wearing a clean navy chest harness, sitting calmly on a sunlit kitchen floor of warm hardwood. Soft morning light streams through a window to the left. In the soft-focus background: a wooden countertop with a small ceramic dog bowl and a measuring cup of kibble. The owner's hand (just hand visible, no face) is gently resting on the dog's shoulder. Editorial lifestyle photography, shot on a 50mm lens at f/2.0, slightly muted color grade with warm cream and navy tones, gentle film grain. The dog looks content, alert, eyes meeting the camera with a soft expression. Composition leaves the left third of the frame empty for headline text. Reminiscent of premium pet brand campaigns — Lake Pet, Wild One, Spark Paws — never stock photography.

---

## DOG CARE — Article preview cards & full article hero images

### `card-feeding` / `article-feeding` — How much to feed your dog

> Overhead flat-lay photograph: a clean stainless steel dog food bowl on a warm walnut wooden countertop, beside it a glass Pyrex measuring cup half-full of dry kibble. A small kitchen scale visible in the upper-right corner, neutral analog dial. Scattered around: two pieces of kibble that have spilled out, a soft blue linen napkin, and a dog's blurred-out paw barely entering the lower-left corner. Soft morning daylight from above, warm cream tones, slight shadow detail. Editorial lifestyle photography, intentional and styled but not over-styled. Composition reads top-down like a cookbook recipe page. No human face. No text or labels.

### `card-pavement` / `article-pavement` — Summer pavement test

> Close-up, low-angle photograph: a human hand (back of hand) pressed flat against a sun-baked grey asphalt sidewalk at midday. In the slightly out-of-focus background, a medium-size dog on a leash patiently waits, only its lower legs and the bottom of a chest harness visible. Heat-haze shimmer faintly visible above the pavement in the distance. Strong directional summer sunlight casts a defined shadow from the hand. Editorial-documentary style, warm color grade with hints of amber and terracotta from the surroundings, gentle film grain. Conveys gentle urgency without alarm. No dog's face shown directly — the photograph is about the test, not the dog.

### `card-leaveit` / `article-leaveit` — The 'leave it' command

> Side-angle photograph at puppy eye-level: a human hand, closed in a soft fist, extended palm-down at the center of frame. A young, attentive Labrador puppy (around 4 months) sits on a clean light wood floor, fully focused on the closed fist, ears slightly forward, body still. The puppy is in soft focus while the closed fist is the sharpest element. Soft, even natural light from a tall window behind the photographer. Neutral pale background — perhaps a soft cream wall. Documentary training-session feel, intimate but uncluttered. No text. The puppy is alert and curious, not anxious. The hand wears no jewelry.

### `card-vet-signs` / `article-vet-signs` — 5 signs your dog needs a vet

> Indoor warm-clinical photograph: a veterinarian in soft blue medical scrubs (only hands and arms visible, no face) gently lifts the upper lip of a calm medium-size mixed-breed dog to examine the gums. The dog sits trustingly on a clean exam table covered with a soft towel, looking up just past the camera. Warm fill light blends with cooler overhead clinical light to feel hopeful, not sterile. Slight bokeh of a vet clinic interior in the background — neutral cabinet, perhaps a soft plant. The composition centers the dog's face. The dog should look trusting and serene, not stressed. Editorial healthcare photography, warm color grade, premium veterinary publication aesthetic.

### `card-harness` / `article-harness` — Collar vs. harness

> Outdoor walking photograph: a medium-sized mixed-breed dog (around 40 lbs, short coat, neutral brown-and-white coloring) wearing a well-fitted navy chest harness with a front-clip leash attachment, captured mid-stride on a tree-lined park path. The owner is partially visible from the side — only a leg, hiking boot, and the lower half of the leash hand. Late afternoon dappled sunlight filters through the trees, creating natural soft highlights on the dog's coat. The dog's body language is relaxed, ears soft, mouth slightly open in a happy pant. Warm autumnal undertones with green from the foliage. Shot at dog eye-level, 35mm lens. Editorial outdoor lifestyle, never staged-stiff.

### `card-staring` / `article-staring` — Why your dog watches you eat

> Indoor warm domestic photograph: a scruffy medium-sized mixed-breed dog sits politely beside a wooden dining table, head tilted slightly to one side, eyes locked upward with intense, loving focus on something off-camera (their owner, eating). The table edge and a plate of warm-toned food (a dinner roll, soft side dish, glass of water) is partially visible at the top of frame, intentionally soft-focused. Warm tungsten evening light creates an intimate, almost cinematic mood. The dog's expression is devoted, slightly hopeful, never sad or pleading-to-the-point-of-guilt. Editorial domestic photography, evokes the feeling of long evenings at home with a family pet.

---

## CAT CORNER — Article preview cards & full article hero images

### `card-indoor-cat` / `article-indoor-cat` — Indoor cats live longer

> Indoor lifestyle photograph: a sleek adult tabby cat perched gracefully on a tall cat tree positioned next to a sunlit window, looking out at a bird feeder visible through the glass. Two finches feed at the feeder in soft focus. The room behind is a cozy modern living space — natural wood floor, a cream linen sofa partially visible, a houseplant in a terracotta pot. Late afternoon golden light streams through the window, warming the cat's fur and casting soft window-pane shadows on the floor. The cat's posture is alert but content — tail loosely draped, eyes fixed on the birds. Composition is wide enough to show both the cat and a glimpse of the inside-outside boundary. Editorial home-and-living photography, the soul of "thoughtful indoor enrichment."

### `card-cat-knock` / `article-cat-knock` — Cats knocking things off tables

> Extreme close-up photograph at table-edge level: a single grey cat paw, claws gently extended, deliberately pressing against the base of a half-full glass tumbler that is teetering close to the edge of a warm-toned wooden table. The cat's face is slightly out of focus in the upper-right background, with one large amber eye visible in soft focus, locked on the photographer (representing the owner) with a calm, deliberate, mischievous expression. Soft daylight from a window left of frame. The composition has cinematic tension — a moment of physics-experiment about to commit. Subtle warm color palette. No motion blur — the glass is still upright, the moment is anticipatory. Premium editorial humor without being a meme.

---

## SUPPORTING IMAGERY (optional, for future expansion)

### `og-default` — Default Open Graph image (1200×630)

> A clean editorial composition: warm cream background with the wordmark "SparkPawsCare" in a friendly modern sans-serif (Plus Jakarta Sans, dark navy), small terracotta paw-print accent beside the word. To the right, a soft photograph of a golden retriever's face and a tabby cat's face partially overlapping — both looking gently toward the viewer. Equally weighted, never one dominating. Plenty of negative space. Premium pet brand visual identity. 1200×630 social card format.

### `about-team` — About page (optional supplemental image)

> A flat-lay overhead photograph: a wooden desk surface holding the tools of pet care writing — an open notebook with handwritten notes about feeding schedules, a leashed dog's bowl, a worn veterinary textbook spine visible, a ceramic mug of black coffee, a small terracotta plant. Soft morning window light. Editorial workspace photography, conveys "real people who research and write carefully."

### `dog-care-banner` — Dog care landing page hero (optional)

> Wide landscape photograph (21:9): three different dogs of varying breeds (a senior labrador, a mid-sized rescue mix, a small terrier) walking together along a sunlit suburban path with their owners (only legs and lower bodies visible). Warm afternoon light, soft long shadows, lifestyle documentary. Suggests the broad community of dog parents the site serves.

### `cat-corner-banner` — Cat corner landing page hero (optional)

> Wide landscape photograph (21:9): two cats in a sunlit living room — one perched on a high shelf surveying the room, the other curled up on a folded blanket on a chair below. Soft afternoon light, warm cream and oak tones. Conveys "cats in a thoughtfully enriched home" without being too cluttered or staged.

---

## Generation tips

1. **Generate 4 variants per prompt, pick the strongest.** Even great prompts produce 1-in-4 keepers.
2. **Run the same prompt twice with different seeds** if you want a hero version and an alt for A/B testing.
3. **Use Nano Banana for editing** any image that needs minor adjustment (e.g., removing a stray object, lightening a shadow).
4. **Save final images to** `assets/images/` with the slug name as the filename — e.g., `assets/images/hero-home.jpg`, `assets/images/card-feeding.jpg`, etc. The HTML placeholders reference these slugs as the `<code>` tag in their fallback content, so the swap-in is straightforward.
5. **Compress before deploying.** Squoosh.app or `sharp` CLI to convert to WebP at 80% quality. Keep JPEG fallbacks.
6. **Add real alt text** when you swap in real images. The current placeholders include suggested alt text via `aria-label` on the `role="img"` div — copy those into your `alt=""` attributes.

---

## Swapping placeholders for real images

When real images are ready, replace each `<div class="img-placeholder">...</div>` block with:

```html
<img
  src="assets/images/hero-home.jpg"
  alt="Golden retriever in a Spark Paws harness in a sunlit kitchen"
  width="1200"
  height="900"
  loading="lazy"
/>
```

The image will inherit the parent's aspect ratio from the existing classes (`card__img`, `article__cover`, `hero` img). No CSS changes required.

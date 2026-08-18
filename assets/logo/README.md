# SparkyPawsCare — logo

## The idea

The parent brand is **Spark** Paws, and this publication cites veterinary research.
An asterisk is the typographic mark for a citation — and it also reads as a spark.
So the mark is a paw whose toe pads are elongated and radially oriented (giving the
arc a radiating, spark-like quality), with a four-point spark set at the upper right.

Pet lineage + editorial credibility + the parent brand name, in one mark — without
resorting to the generic paw print that every pet brand already uses.

## Files

| File | Use |
|---|---|
| `mark.svg` | Primary. Navy paw + terracotta spark. Light backgrounds. |
| `mark-mono.svg` | Single colour via `currentColor`. Stamps, print, email, one-colour contexts. |
| `favicon.svg` | Icon variant: cream paw knocked out of a navy disc. |

The mark is also inlined in the page templates (nav, footer, hero badge) so it
inherits CSS colour and costs no extra request.

## Colour

| Context | Paw | Spark |
|---|---|---|
| Light background | `#344D79` navy | `#C97B5A` terracotta |
| Dark background | `#F9F3E8` warm cream | `#C97B5A` terracotta |
| One colour | any | same as paw |

In CSS the inline mark is driven by `.logo-paw` and `.logo-spark`, so it can be
recoloured per context without editing the SVG.

## Sizing

- Minimum size for the full mark: **20px**. Below that the spark stops resolving.
- The favicon variant drops the spark deliberately so it stays legible at **16px**.
- Clear space: leave at least the width of the spark (≈⅕ of the mark) on all sides.

## Don't

- Don't add a container/disc to the primary mark — the freestanding form is the brand.
- Don't recolour the spark to anything but terracotta (or the paw colour in one-colour use).
- Don't rotate or reflow the toe arc; the radial angles (−52°, −18°, 18°, 52°) are what
  give it the spark quality.

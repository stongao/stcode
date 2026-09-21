# Marathi Cultural Knowledge Graph — Product Brief

## Problem

Marathi cultural and literary history is fragmented, poorly indexed, and difficult to trace to authoritative sources.

## Vision

A browsable knowledge graph of Marathi literature and cultural memory, grounded in primary and scholarly sources, where users can trace works, people, ideas, phrases, places, and time periods.

## Who it is for (v1)

Curious readers and light researchers — anyone who wants origins, related topics, concepts, and ideas centered on Marathi literature or culture.

## Core user journey

Someone encounters a Marathi poem, song, or phrase → searches it → discovers provenance → explores connected people, texts, ideas, and historical context.

Example trail:

```text
heard अभंग / phrase
  → search पैल तोगे काऊ कोकताहे
  → identify work + attribution
  → date/period + evidence
  → ज्ञानेश्वर
  → contemporary works
  → 13th century
  → related concepts / authors / texts
```

**Product thesis:** Search is the door; provenance is the trust layer; the graph is the reason to stay.

---

## What this product is not

These boundaries are deliberate. They keep the product focused on *traceable cultural memory*, not adjacent formats that look similar but fail the core journey.

### Not an ebook store

We do not sell, license, or stream books as the primary experience. Reading full texts may appear later as *evidence in context*, not as a catalog of titles to purchase or consume cover-to-cover.

### Not merely a scanned-book archive

A pile of PDFs or page images is not the product. Digitized pages can support claims; the product is indexed entities, relationships, and provenance — not a browse-by-shelf scan repository.

### Not an AI chatbot that invents historical relationships

The system must not invent attributions, dates, or “related to” edges. Connections are curated or derived from cited sources. Generative assistance, if used at all, may help search or presentation — never manufacture history without evidence.

### Not Wikipedia translated into Marathi

We are not a general encyclopedia, not a free-form article wiki, and not “Marathi Wikipedia with a nicer UI.” Coverage is selective and deep along literary/cultural trails; every important claim carries sources and confidence, rather than unbounded topical articles.

---

## What v1 *is* (short)

| In | Out (for now) |
|----|----------------|
| Phrase/work search (Devanagari-first) | Crowdsourced wiki editing |
| Entity pages: work, person, passage, period, concept, place, source | Full-corpus digitization / OCR pipelines |
| Provenance on attributions and dates | Academic reference-manager features |
| Linked browse across the graph | Social feeds, comments |
| Curated seed corpus with citations | Chatbot-as-oracle answers |

---

## Next

Design a **POC** whose only job is to prove the base journey is technically feasible:

> search phrase → identify work → show provenance → hop to person → period → contemporaries / related concepts

POC scope and technical choices will be defined in a follow-up; this brief only locks product identity and non-identity.

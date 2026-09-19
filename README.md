# Navttc2024

A structured archive of coursework from the **CIT (Web Software & Mobile Web Development)** certification under Pakistan's National Vocational and Technical Training Commission (NAVTTC), completed February–March 2024.

## Purpose

This repository documents a beginner's progression through core web development fundamentals — HTML, CSS, JavaScript, jQuery, and Bootstrap — as taught in a structured vocational course. It exists for two reasons:

- **As a portfolio reference** — to show a verifiable, dated record of how these fundamentals were learned and applied, rather than a single polished final project.
- **As a reference for other NAVTTC/CIT students** — anyone taking the same or a similar course can see a worked example of the same assignments.

This is a personal coursework log, not an actively maintained open-source project, so it is not seeking external contributions. It is kept public for transparency and reference.

## Course details

| | |
|---|---|
| Course | Certification in IT (CIT) — Web Software & Mobile Web Development |
| Issuer | National Vocational and Technical Training Commission (NAVTTC) |
| Issued | February 2024 |
| Credential ID | S-24-847060 |
| Certificate | [`docs/certificate.jpeg`](./docs/certificate.jpeg) |

## What this repository contains

Two categories of work:

1. **`daily-tasks/`** — one folder per class day, containing the actual assignment(s) completed that day, in chronological order. This is the primary record: it shows what was covered and in what sequence.
2. **`practice/`** — supplementary exercises grouped by topic (CSS, JavaScript, jQuery, Bootstrap), done alongside the daily coursework to reinforce specific concepts. These are not tied to a single date.

## Daily task log

| Date | Topic | Source | Live preview |
|---|---|---|---|
| 2024-02-26 | HTML basics — introductory page | [`daily-tasks/2024-02-26-html-intro/`](./daily-tasks/2024-02-26-html-intro/) | [View](https://kiranshamshere.github.io/Navttc2024/daily-tasks/2024-02-26-html-intro/) |
| 2024-02-27 | Text tags — headings, lists, links | [`daily-tasks/2024-02-27-html-text-tags/`](./daily-tasks/2024-02-27-html-text-tags/) | [View](https://kiranshamshere.github.io/Navttc2024/daily-tasks/2024-02-27-html-text-tags/task1-headings.html) |
| 2024-02-28 | Internal/external linking, iframes, a small multi-page site | [`daily-tasks/2024-02-28-links-and-includes/`](./daily-tasks/2024-02-28-links-and-includes/) | [View](https://kiranshamshere.github.io/Navttc2024/daily-tasks/2024-02-28-links-and-includes/myFamily.html) |
| 2024-02-29 | Images and media elements | [`daily-tasks/2024-02-29-images-and-media/`](./daily-tasks/2024-02-29-images-and-media/) | [View](https://kiranshamshere.github.io/Navttc2024/daily-tasks/2024-02-29-images-and-media/mediaTask.html) |
| 2024-03-04 | Tables — basic structure | [`daily-tasks/2024-03-04-tables-1/`](./daily-tasks/2024-03-04-tables-1/) | [View](https://kiranshamshere.github.io/Navttc2024/daily-tasks/2024-03-04-tables-1/timeTable.html) |
| 2024-03-05 | Tables — rowspan/colspan | [`daily-tasks/2024-03-05-tables-2/`](./daily-tasks/2024-03-05-tables-2/) | [View](https://kiranshamshere.github.io/Navttc2024/daily-tasks/2024-03-05-tables-2/) |
| 2024-03-06 | Forms and tables combined | [`daily-tasks/2024-03-06-forms-and-tables/`](./daily-tasks/2024-03-06-forms-and-tables/) | [View](https://kiranshamshere.github.io/Navttc2024/daily-tasks/2024-03-06-forms-and-tables/form.html) |
| 2024-03-07 | Forms — login and report forms | [`daily-tasks/2024-03-07-forms/`](./daily-tasks/2024-03-07-forms/) | [View](https://kiranshamshere.github.io/Navttc2024/daily-tasks/2024-03-07-forms/formTask.html) |
| 2024-03-08 | Styled page — external CSS, layout | [`daily-tasks/2024-03-08-styled-page/`](./daily-tasks/2024-03-08-styled-page/) | [View](https://kiranshamshere.github.io/Navttc2024/daily-tasks/2024-03-08-styled-page/) |

## Practice exercises

| Topic | Contents |
|---|---|
| [`practice/css/`](./practice/css/) | Box model, flexbox, list styling, table styling |
| [`practice/javascript/`](./practice/javascript/) | Variables, operators, conditionals, loops, functions, arrays and objects |
| [`practice/jquery/`](./practice/jquery/) | DOM manipulation via click events, a salary/tax calculator |
| [`practice/bootstrap/`](./practice/bootstrap/) | Grid system, buttons, cards |

## Repository structure

```
Navttc2024/
├── daily-tasks/       one folder per class day, in date order
├── practice/
│   ├── css/
│   ├── javascript/
│   ├── jquery/
│   └── bootstrap/
├── assets/
│   └── images/         shared images referenced by the tasks above
├── docs/
│   └── certificate.jpg
└── README.md
```

## Technology used

HTML5, CSS3, JavaScript, jQuery, Bootstrap.

## Running locally

This is a static site with no build step or dependencies.

```bash
git clone https://github.com/kiranShamsHere/Navttc2024.git
cd Navttc2024
```

Open any `index.html` (or the specific task file) directly in a browser, or use the live preview links in the table above.

## Author

**Kiran Shams**

[Portfolio](https://devkiran.vercel.app)

## License

Released under the [MIT License](./LICENSE).

---
title: "Easter Eggs and Hidden Inputs"
description: "Optional Vault inputs, D1 coffee-cup names, hidden drivers, and the Ophiuchus reference in Password b0.85"
toc: true
---

This page collects the optional inputs and Easter eggs in Password b0.85. None is required for a lettered Path or for reaching Path P.

## D1–D3 Vault Easter Eggs

The first three Vault visits include two optional inputs and one day with no accepted answer.

::: {.easter-vault-table .table-responsive .table-scroll-compact}

| Day | Input | Effect |
|---:|---|---|
| D1 | `THE END` | Clears the recorded ending flags, then quits the game |
| D2 | — | No input is accepted as the correct D2 password in b0.85 |
| D3 | `THE LOVERS` | Adds 5 affection points to each of the six main characters |

:::

### Input rules

These Vault inputs are not case-sensitive, and leading or trailing spaces are removed. Spaces inside the answer must remain, and each input works only on its assigned day.

For example, `the lovers` works on D3, but `THELOVERS` does not.

### `THE END`

Entering `THE END` during the D1 Vault visit clears the stored true-ending flag and Path A–G ending flags, then closes the game. It does not clear the twelve zodiac medals, so use it only if you intend to reset those ending records.

### D2 has no correct password

D2 still opens the Vault input screen, but no answer is accepted as correct on that day. Passwords assigned to other days may receive different failure feedback, but none opens a D2 success branch.

### `THE LOVERS`

Entering `THE LOVERS` on D3 adds 5 points to all six affection values. It is the largest single event in normal b0.85 play that raises all six at once.

See [Affection System and Point Guide](../mechanics/affection.md) for later thresholds and character-specific checks.

## D1 Coffee-Cup Name Easter Eggs

Near the beginning of D1, Roswell asks Dave to enter the name written on his coffee cup. The answer can change the cup dialogue, add affection, or replace the bus driver who takes the group to the mansion.

Unlike Vault input, the cup name remains case-sensitive. Leading and trailing spaces are removed, but the capitalization below must be exact:

```text
Dave Dean Tyson Roswell Orlando Hoss Sal
Chase
Civ Rem
Wilson Timber Zylus
```

For example, `Dave` works, while `dave` and `DAVE` use the generic response.

### Dave and the six main characters

Entering `Dave` triggers a dedicated response and adds 1 affection point to each of the six main characters.

Entering a character's name triggers that character's response and adds 1 point only to the matching character:

| Input | Affection effect |
|---|---|
| `Dean` | Dean `+1` |
| `Tyson` | Tyson `+1` |
| `Roswell` | Roswell `+1` |
| `Orlando` | Orlando `+1` |
| `Hoss` | Hoss `+1` |
| `Sal` | Sal `+1` |

These names do not replace the driver.

### `Chase`

`Chase` is a reference to the otter protagonist of *[Echo](https://echoproject.itch.io/echo)*. Roswell says that the name sounds as though it belongs to an otter, then adds that it might also suit a dog.

This input does not change affection or the driver.

### `Civ`

`Civ` produces a short `Civ` / `shiv` exchange, followed by Roswell commenting that the name sounds musical.

Civ Valian is credited for **Sound Design/Composition**. This input does not change affection or the driver.

### `Rem`

`Rem` makes Dave discover that the drink is almost entirely water. Roswell nervously suggests that it might be “caffeinated water.”

Rem is credited as a **Diamond Patron**. This input does not change affection or the driver.

## Hidden Driver Names

`Wilson`, `Timber`, and `Zylus` replace the default driver later on D1. Each name also adds 1 affection point to all six main characters when the driver scene begins; the bonus does not occur during the cup dialogue.

### `Wilson`

Wilson's cup is covered in tiny lines and writing that resemble an essay or mind map. The drink itself is ordinary coffee.

The replacement driver is a fox named Wilson. Roswell compares him to Charon, the ferryman of the dead, while Hoss points out that his name tag clearly says Wilson. He uses the normal farewell after the group reaches the mansion.

### `Timber`

Timber's cup has circles around its base that may form a bear. Roswell suggests that someone tried to make the coffee resemble the milk tea Hoss likes.

Timber is an exceptionally large bear. The group reacts to his size, and Dean becomes noticeably competitive. After arriving at the mansion, Timber privately tells Dave to take care of himself.

Timber is credited as a **Diamond Patron**.

### `Zylus`

`Zylus` uses the generic cup response, but the later driver check still recognizes the name.

Zylus is a deer-like driver with large antlers and prominent fangs. The group discusses his teeth and the difficulty of fitting his antlers around the driver's seat. He uses the normal arrival farewell.

Zylus is credited as a **Diamond Patron**.

### Special-input summary

::: {.easter-special-input-table .table-responsive .table-scroll-compact}

| Input | Dedicated cup response | Affection effect | Driver | Additional note |
|---|---|---|---|---|
| `Dave` | Yes | All six `+1` | Default | Dave-name response |
| Six main character names | Yes | Matching character `+1` | Default | One character only |
| `Chase` | Yes | None | Default | *Echo* reference |
| `Civ` | Yes | None | Default | Civ Valian reference |
| `Rem` | Yes | None | Default | Credited Diamond Patron |
| `Wilson` | Yes | All six `+1` at the driver check | Wilson | Hidden driver |
| `Timber` | Yes | All six `+1` at the driver check | Timber | Credited Diamond Patron |
| `Zylus` | No; generic response | All six `+1` at the driver check | Zylus | Credited Diamond Patron |

:::

### Other names

Any other non-empty input uses the generic cup response. This includes later character names such as `Oswin` and `Benson`.

## Known Passwords Entered on the Wrong Day

The Vault recognizes some passwords even on the wrong day, but the failure response changes across the story.

::: {.easter-wrong-day-table .table-responsive .table-scroll-compact}

| Input day | Wrong-day behavior |
|---:|---|
| D1 | Uses the ordinary error response |
| D2 | Produces a pause and click that sounds almost correct |
| D3 | Displays `PASSWORD INVALID FOR CURRENT DATE` and hints that the answer belongs to another day |
| D4 | Uses the same current-date warning |
| D6 | Distinguishes a known password from the password required that day |
| D7 onward | Generally merges wrong-day passwords into the ordinary error response |

:::

This changes only the feedback. A password still works only on its assigned day.

For accepted-password hints, see [Tiered Password Hints](../guide/password-hints.md). For the shared dispatcher and its failure categories, see [Vault Password Check Mechanics](../mechanics/password-checks.md).

## Ophiuchus and the Twelve-Medal Limit

Late Path A dialogue mentions **Ophiuchus**, sometimes treated as a thirteenth zodiac sign. In b0.85 it is a story reference, not a collectible medal.

The Compendium contains twelve Lore entries, and the final Path P check counts the twelve standard zodiac medals. No Ophiuchus medal or hidden thirteenth-medal password is required.

See [Twelve-Medal Collection Guide](../collectibles/medals.md) and [Medal Persistence and Final Check](../mechanics/medal-persistence.md) for the complete collection rules.

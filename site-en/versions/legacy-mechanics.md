---
title: "Legacy Mechanics Archive"
description: "Persistent Path A scenes, the retired D8 Oswin input system, and other mechanics changed between Password b0.7 and b0.85"
toc: true
---

This page documents several mechanics that were present in *Password* b0.7 and were later removed, replaced, or reorganized in b0.85.

The main subjects are:

- the profile-wide Path A first-run gate;
- the two related Additional Scenes in b0.85;
- the retired D8 free-text conversation with Oswin;
- the removed D11 laboratory decision.

::: {.callout-warning}
## Source remnants are not playable entries

A surviving variable, label name, password string, or conditional does not prove that a mechanic remains usable in b0.85.

A current entry must still have:

1. a normal story or interface entry;
2. a reachable target label;
3. a state that normal gameplay can write;
4. a current screen or story branch that reads it.

Several systems on this page leave partial remnants without a complete playable path.
:::

## Path A first-run gate

Both b0.7 and b0.85 use `persistent.Day23APrime` to distinguish the first normal traversal of late Path A from later traversals.

This is a persistent profile-wide value rather than an ordinary save variable. It is shared across character Routes and save slots.

### First normal traversal

The actual first-run sequence is:

```text
enter the late Path A sequence
→ play the first Dave segment
→ continue into the Roswell segment
→ set persistent.Day23APrime = True
→ immediately continue into Day23A_Prime
```

The first traversal therefore does **not** end when the persistent flag is written. The later `Day23A_Prime` material follows immediately during the same long sequence.

The names **Dave's Demise** and **Roswell's Attempt** were later assigned to the two first-run segments by the b0.85 Additional Scenes interface. They were not separate menu choices in b0.7.

### Later normal traversals

On a later eligible traversal:

```text
common opening material
→ persistent.Day23APrime is already True
→ jump directly to Day23A_Prime
```

The two first-run segments are skipped.

Starting a new game does not by itself reset this persistent value. Resetting or deleting the game's persistent data restores the default first-run state.

### Loading an old save

The result depends on where the save was made:

- a save loaded **before** the persistent dispatcher reads the current profile-wide value and may skip the first-run segments;
- a save made **inside** the first-run sequence has already passed that dispatcher and can continue from its saved location.

This is why a normal save slot does not behave as an independent copy of the first-run unlock state.

## Additional Scenes in b0.85

b0.85 registers the two segments as the first entries under **Additional Scenes** in **Compendium**:

1. `Dave's Demise`
2. `Roswell's Attempt`

Both use the same unlock condition `persistent.Day23APrime`. They therefore normally unlock together.

For their current list positions and troubleshooting, see [Compendium Unlock Index](../collectibles/compendium.md).

### Replays are bounded scene extracts

The two entries reuse original story labels, but they are not identical to replaying the entire normal Path A sequence.

`Dave's Demise`:

- bypasses the normal persistent skip while replaying;
- forces the state needed to reach its target segment;
- ends before the normal flow enters the Roswell segment.

`Roswell's Attempt`:

- starts directly at the Roswell segment;
- ends before the normal persistent write and the later `Day23A_Prime` continuation.

The replay ranges can still display registered Gallery images and execute assignments located inside those ranges. They should therefore be understood as **replay-specific extracts of the original labels**, not as isolated video files or complete reproductions of every surrounding story effect.

## D8 Oswin free-text conversation

b0.7 contains a normal D8 conversation in which the player can type questions for Oswin.

Its structure is a menu-controlled free-text loop:

```text
Question.
→ type a question
→ match keywords
→ show a response
→ return to the question menu

Stay Silent.
→ leave the interaction
```

There is no fixed question limit. Empty input is handled separately, and three unmatched attempts trigger a help response before the unmatched counter is reset.

### What the interaction affected

The free-text system writes three ordinary variables:

::: {.table-responsive}
| Variable | Role |
|---|---|
| `OzPast1` | Records one piece of family-history information |
| `OzPast2` | Records story or rabbit-related information |
| `OzWrong` | Counts unmatched inputs |
:::

It does not directly set:

- a character Route or a lettered Path;
- a medal;
- a major ending;
- a main Vault success flag;

The interaction is therefore not required for completion. However, `OzPast1` and `OzPast2` are read by later dialogue, so selected answers can change text on later days.

## How the old parser worked

The system did not require most listed questions to match one exact sentence.

Its parser:

1. converts the input to lowercase;
2. removes a fixed set of ASCII punctuation;
3. checks required keyword groups;
4. accepts any listed synonym inside a group;
5. uses exact token matching for one-word synonyms;
6. uses literal substring matching for multiword synonyms.

Every required group must match, but their order is not enforced. Extra words are usually allowed.

### Important boundaries

::: {.table-responsive .table-scroll-compact}
| Input feature | Actual behavior |
|---|---|
| Letter case | Ignored because input is lowercased |
| Leading or trailing spaces | Not deliberately trimmed, although many matches still work |
| Common ASCII punctuation | Removed from a fixed list |
| Apostrophes and hyphens | Not removed by that list |
| Unicode punctuation | Not normalized |
| Repeated internal spaces | Can break a multiword substring |
| Word order | Generally not enforced across keyword groups |
| `/` in an archive list | Editorial separator only; it has no parser meaning |
:::

The parser also gives priority to earlier branches. A broad earlier condition can therefore intercept an input before a more specific later condition is reached.

## Conversation prompts to try

The following prompts were checked against the b0.7 parser. They are historical examples only and cannot be entered through normal b0.85 gameplay.

### State-dependent rabbit response

The rabbit interaction is state-dependent, but the second input does not have to be the exact phrase `what rabbit`.

An initial rabbit-, hare-, or story-related response can set `OzPast2`. A later rabbit-related input then receives the follow-up version because the state has changed.

The important condition is the saved ordinary state, not a mandatory two-line command sequence.

Some prompts are intentionally abbreviated or grammatically unusual because those forms match the old keyword parser reliably.

<details>
<summary><strong>Conversation prompts to try</strong></summary>

The input box did not understand unrestricted natural language. It looked for groups of keywords, so the lines below are tested, player-friendly examples rather than the only possible wording.

Capitalization does not matter. Type one prompt at a time, and keep spaces in phrases such as `hidden camera`.

<div class="table-responsive table-scroll-wide oswin-dialogue-table">

| Topic | Prompts to try | What Oswin may discuss |
|---|---|---|
| Dave and Oswin | `who am i` · `who are you` | Their identities and Dave's situation |
| Family | `can i call you dad` · `did you want a family` | Oswin's feelings about family and parenthood |
| Friendly interaction | `can i hug you` · `can i tickle you` · `can i thank you` | Optional personal or humorous responses |
| Small jokes | `boop snoot` · `am i a good boy` | Short character reactions |
| Stories | `story` · `can you tell me a story` | Oswin's stories and related background |
| Rabbit follow-up | `rabbit` | Asking about rabbits again later can produce a different response |
| Preferences | `tea or coffee which do you like better` | Oswin's drink preference |
| General Easter eggs | `what is love` · `got any grapes` · `do you like waffles` · `buhi` | Joke and reference responses |
| The killer | `who want to kill us` · `who try to kill us` | The threat facing the group |
| Poison | `poison` · `did you poison dean` · `you know how to poison` | Poisoning and Oswin's knowledge |
| The gun | `gun` · `where gun` · `who has gun` · `who hide gun` | The firearm and who may possess it |
| The dagger | `dagger` · `where did you get dagger` | The dagger and its origin |
| Emergency plans | `call police` · `what if we die` | Police, death, and the group's situation |
| Surveillance | `hidden camera` · `is camera still working` · `soundproof` | Cameras, blind spots, recordings, and soundproofing |
| Trust | `can i trust hoss` · `can i trust dean` · `can i trust you` · `can you trust me` | Whether Dave or Oswin trusts particular people |
| Oswin's family | `are you roswell's father` · `who is your brother` · `what is your sister's name` | Oswin's relatives and his connection to Roswell |
| Science and research | `why you become a doctor` · `what is morphic resonance` · `mycology` · `you know deathcaps` | Medicine, fungi, experiments, and morphic resonance |
| Benson | `benson` · `where is benson` · `benson old job` · `benson and vault` | Benson's identity, history, location, and connection to the Vault |
| The Vault | `vault` · `who used vault` · `can you open vault` | The Vault's purpose and users |
| The forest | `forest` · `someone else in woods` · `cabin in woods` · `what mushrooms in woods` | The surrounding woods, their inhabitants, and the cabin |
| Hidden areas | `hidden room` · `hidden path` · `safest room` | Secret or protected locations around the mansion |
| The laboratory | `where lab` · `where study` · `how you program` | Oswin's laboratory and technical work |
| Medals | `medals` · `where medals` · `how many medals are there` · `who hid medals` | The medal collection and who placed it |
| Hoss's notes | `hoss list` · `marked` | Hoss's list and the marked medals |
| Other characters | `did you meet my friends` · `have you met hoss` · `what did tyson do` | Oswin's knowledge of Dave's companions |

</div>

Some subjects have more than one response, and a few answers depend on what Dave has already asked. The table is not exhaustive, but every listed line is intended as a practical prompt rather than a description of the parser's internal rules.

</details>

## b0.85 replacement

b0.85 removes the D8 free-input engine and replaces the scene with scripted dialogue.

This should not be described as every related idea and every line being erased:

- selected old topics are reused in the fixed scene;
- some old ordinary variables and later conditional checks remain in the source;
- the normal input menu, `renpy.input` loop, keyword engine, and old response labels are no longer available to the player.

There is no evidence that the old question library was systematically migrated into Cast Files, Lore, or Additional Scenes.

## D11 laboratory decision

The b0.7 Oswin-alive D11 laboratory sequence contained a separate three-way decision:

::: {.table-responsive}
| b0.7 choice | Immediate effect |
|---|---|
| `Inject me.` | No `DavePride` increase |
| `Inject him.` | `DavePride += 1` |
| `Don't inject.` | `DavePride += 2` |
:::

This choice is distinct from the optional D11 Vault documented in [Legacy Password Archive](legacy-passwords.md).

In b0.85, the menu is removed. The scene instead follows a fixed sequence in which Oswin injects Dave from behind and later reveals that the substance was saline.

The change:

- removes a normal player decision;
- removes the two possible `DavePride` gains;
- fixes the order and outcome of the laboratory scene.

It does not directly assign a character Route, lettered Path, or ending.

## Related pages

- [Legacy Password Archive](legacy-passwords.md)
- [Legacy Route Archive](legacy-routes.md)
- [Major Changes in b0.85](b085-changes.md)

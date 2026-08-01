---
title: "Lettered Path System"
description: "How Path A–G and Path P branch in Password b0.85"
toc: true
---

Character routes and lettered Paths are separate but interacting systems. This page focuses on the conditions that lead to Path A–G and Path P.

For the broader distinction between the two systems, see [Route and Path Overview](route-overview.md).

::: {.callout-warning}
## Path spoilers

This page explains how to reach Path A–G and Path P. It does not reveal any password answers.
:::

::: {.callout-note}
This page does not catalogue every bad ending. Character-route-specific bad endings that occur before the lettered Path split are outside its scope.

Before the normal Path A–D split, missing an earlier vault requirement can lead to `BAD END: BENSON` on D8. This is a separate failure, not one of the lettered Paths.
:::

## Base split: Path A–D

The first major split is the D8 choice between **Reveal Oz** and **Support Benson**. This choice affects whether Oswin dies early, while the D10 password check determines whether the run stays on the shared Path A/B story or moves to the Path C/D story.

Outside the Sal Route, the normal mapping is:

| D8 choice | Meaning | D10 check | Base Path |
|---|---|---|---|
| **Support Benson** | Keep Oswin hidden | Passed | Path A |
| **Reveal Oz** | Reveal Oswin to the group | Passed | Path B |
| **Support Benson** | Keep Oswin hidden | Failed | Path C |
| **Reveal Oz** | Reveal Oswin to the group | Failed | Path D |

In practical terms:

- Path A and Path C come from the side where Oswin does not die early.
- Path B and Path D come from the side where Oswin dies early.
- Passing the D10 check keeps the run in the shared Path A/B story.
- Failing the D10 check normally moves a non-Sal run into the Path C/D story.

The D8 choice does not immediately display a new Path. The D8 choice does not immediately change the displayed Path. It sets a story condition that is evaluated later.

### Sal Route exception

The Sal Route does not move into Path C or Path D when the player gives up on the D10 password check. The run remains in the shared Path A/B story according to the earlier Oswin state.

This exception does **not** count as passing the password check. Completing the check correctly still matters for Gallery completion: the successful Sal Route branch unlocks the Sal vault CG and also displays an image filed in the death Gallery. Other Sal Gallery content is unlocked through normal route progression and does not depend on this check.

## Later splits: Path E–G

Runs on the ordinary Path C/D side continue into the Day 14 (D14) rescue sequence. These Paths are still subject to reclassification: the final result depends on whether Sal reaches the mill sequence alive and on the choice between **Save Benson.** and **Save Sal.**

A run that begins on the Path C side can therefore finish as Path C, Path D, or Path E. A run that begins on the Path D side can finish as Path D or Path E, but it cannot return to Path C because Oswin's earlier death cannot be reversed.

When Sal reaches the D14 mill sequence alive, the main outcomes are:

| Starting side | D14 choice | Final result |
|---|---|---|
| Path C side | **Save Benson.** | Path C |
| Path C side | **Save Sal.** | Reclassified as Path D |
| Path D side | **Save Sal.** | Remains on Path D |
| Path D side | **Save Benson.** | Path E |

On the Path C side, saving Sal causes Benson to die. Oswin then takes his own life, so the run is deliberately reclassified from Path C to Path D. Additional terminal death-state combinations lead to Path E.

Path E is a terminal Path with several possible entry conditions. It is not tied to one universal menu choice, so its exact outcome depends on the state of the run entering the D14 sequence.

Path A and Path B instead continue to the D17 password check.

| Current Path | D17 check passed | D17 check failed outside the Tyson Route |
|---|---|---|
| Path A | Remains on Path A | Leads to the D19 disaster and is classified as Path F on D20 |
| Path B | Remains on Path B | Leads to the D19 disaster and is classified as Path G on D20 |

The password is entered on D17. The consequences of failure occur on Day 19 (D19), and the game assigns Path F or Path G on Day 20 (D20) according to whether Oswin is alive.

### Early bad ending within Path F/G

Failing the D17 check does not immediately produce the later solo-departure bad ending. After the D19 disaster and the assignment of Path F or Path G, Day 21 (D21) presents the choices **Stay.** and **Leave.**

Choosing **Leave.** causes Dave to leave the group and leads to `BAD END: DOMINIC`. This is an early terminal branch within the existing F/G flow, not a separate Path created on D17. Unlike the normal Path F and Path G endings, this branch does not offer **Resonate?**

### Tyson Route exception

On the Tyson Route, failing or giving up on the D17 password does not ultimately divert the run into Path F or Path G. The existing A/B direction is preserved.

This does not count as solving the password. The protection comes from later Tyson Route events that prevent the D19 disaster.

On D18, the Tyson Route reveals the source of the high-frequency sound that would otherwise trigger the D19 disaster. Tyson then sleeps in Dave’s room instead.

No additional affection threshold, romance status, survival flag, or extra choice is required for this protection.

<details>
<summary><strong>How the Sal and Tyson Route exceptions differ</strong></summary>

Both route exceptions prevent the normal Path diversion after a failed password check, but neither one counts as solving the password.

::: {.path-exception-comparison-table .table-responsive .table-scroll-wide}

| | Sal Route at D10 | Tyson Route at D17 |
|---|---|---|
| When the exception takes effect | Immediately after **Give up**, through a Sal-specific failure branch; the safe result is checked again on D11 | Not during the D17 failure scene; the safeguard is applied later, at the end of D19 |
| Password treated as solved | No | No |
| Failure scene | Sal receives a route-specific Vault scene | Uses the same D17 failure scene as the other routes |
| Disaster prevented | The D11 disaster and the ordinary Path C/D branch | The D19 disaster and the later Path F/G diversion |
| Path display | The save slot may temporarily show `Path C` even while the shared Path A/B story is running | The existing `Path A` or `Path B` display remains consistent |
| Success-only content | The successful warning scene and related Gallery content can still be missed | The successful warning and related password-specific dialogue can still be missed |
| Story branches made unreachable | The true Path C/D/E storyline and endings | The Path F/G storyline and endings |
| Other Path diversion still possible | Sal Route can still enter Path F/G after a later D17 failure | Tyson Route can still enter Path C/D after an earlier D10 failure |

:::

The Sal Route may temporarily display `Path C` after a failed D10 check, but this is a Path-state display inconsistency. The run does not enter the actual Path C/D story or reach the C/D/E ending system.

From a player's perspective, both are route exceptions to the normal consequences of password failure. The Sal exception takes effect immediately and may leave the displayed Path temporarily out of sync with the story, while the Tyson exception takes effect on D19 and leaves the displayed Path unchanged.
</details>

## Path P

Path P is not selected during the early route splits. It is the final collection branch reached after completing the main Path A sequence.

To enter Path P:

1. remain on Path A through its main ending;
2. reach the final medal check after `PATH A: END`;
3. have all twelve medals recorded by the game.

With fewer than twelve medals, the game ends after the normal Path A conclusion. With all twelve medals, the story continues into the prime-timeline sequence and the game sets the current Path value to `P`.

The requirements and recommended collection order are covered in the medal guide.

## Path summary

::: {.path-summary-table .table-responsive}

| Path | Core entry conditions |
|---|---|
| **Path A** | Keep Oswin from dying early; remain on the D10 safe side; avoid the F/G split through either D17 success or the Tyson Route safeguard |
| **Path B** | Allow Oswin to die early; remain on the D10 safe side; avoid the F/G split through either D17 success or the Tyson Route safeguard |
| **Path C** | Keep Oswin from dying early; fail the D10 check outside the Sal Route |
| **Path D** | Reach the D10 failure side outside the Sal Route with Oswin dead |
| **Path E** | Reach one of the terminal D14 death-state combinations from the ordinary C/D side |
| **Path F** | Begin from the Path A direction, fail the D17 check outside the Tyson Route, and reach the D19 disaster with Oswin alive |
| **Path G** | Begin from the Path B direction, fail the D17 check outside the Tyson Route, and reach the D19 disaster with Oswin dead |
| **Path P** | Complete the main Path A sequence and reach the final medal check with all twelve medals |

:::

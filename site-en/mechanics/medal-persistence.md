---
title: "Medal Persistence and Final Check"
description: "How Password b0.85 stores medal progress, updates the Compendium, and checks all twelve medals for Path P"
toc: true
---

The twelve zodiac medals are not stored inside one ordinary story save. Each medal is tracked through a Ren'Py `persistent` flag, allowing collection progress to carry across routes, Paths, and playthroughs.

The final medal check does not inspect the current save slot for twelve inventory items. Instead, it recounts the same twelve persistent flags after `PATH A: END`.

::: {.callout-important}
## Three separate stages

Medal collection has three distinct layers:

1. **Story discovery:** a medal appears or is found in the narrative.
2. **Persistent unlock:** the game sets the corresponding `persistent.<medal>` flag to `True`.
3. **Final check:** the Path A ending recounts all twelve persistent flags.

Only the second stage permanently adds that medal to the collection state used by the final check.
:::

## How medal progress is stored

The game defines one persistent Boolean flag for each zodiac medal:

```renpy
default persistent.aries = False
default persistent.taurus = False
default persistent.gemini = False
default persistent.cancer = False
default persistent.leo = False
default persistent.virgo = False
default persistent.libra = False
default persistent.scorpio = False
default persistent.sagittarius = False
default persistent.capricorn = False
default persistent.aquarius = False
default persistent.pisces = False
```

When the corresponding story node is reached, the game changes one flag to `True`, for example:

```renpy
$ persistent.aries = True
```

b0.85 has no in-game option that resets the twelve medal flags, and no story branch sets them back to `False`. Loading an ordinary save restores the story state but does not roll back medal progress.

In practical terms:

- medals can be collected across different character routes and lettered Paths;
- loading an older story save does not restore the medal flags saved in that slot;
- one playthrough does not need to contain all twelve medals;
- the final Path A run can use medals obtained during earlier runs.

After obtaining a medal, it is sensible to let the scene finish and make a normal save before switching runs or closing the game.

## Finding a medal is not always enough

Some medals appear in the story before their persistent flags are written.

The clearest examples are:

- **Aquarius:** found in the D4 hedge maze, but written during the D16 A/B inventory scene;
- **Taurus:** found under the giant pumpkin on D7, but also written during the D16 A/B inventory scene.

A player can therefore remember seeing one of these medals while the persistent flag is still `False`.

By contrast, Pisces, Cancer, and Capricorn are written during their D9 character-route scenes even though some of their zodiac identities are confirmed later.

For exact discovery and write locations, see [Twelve-Medal Collection Guide](../collectibles/medals.md).

## Why some medals have multiple write locations

Repeated assignments do not represent duplicate medals. They usually support alternative story branches or later confirmation scenes.

Pisces, Cancer, and Capricorn are first written during their D9 character-route scenes and may be written again during the D16 Path A/B inventory scene. The later assignment is a redundant confirmation, not a second collectible or an additional requirement.

Virgo and Sagittarius also have repeated writes across mutually exclusive relationship-ending branches. Any one valid Path A ending awards Virgo, and any one valid Path B ending awards Sagittarius.

## How the final twelve-medal check works

After `PATH A: END`, the game resets a temporary counter:

```renpy
$ MedalsFound = 0
```

It then checks each persistent medal flag and adds one for every value that is `True`:

```renpy
if persistent.aries == True:
    $ MedalsFound += 1
```

After all twelve flags have been checked:

- fewer than twelve ends the current post-Path-A sequence without entering Path P;
- all twelve allows the story to continue into the Path P sequence.

`MedalsFound` is not the permanent collection record. It is only a temporary total rebuilt each time the final check runs.

The actual collection state remains:

```text
persistent.aries
...
persistent.pisces
```

::: {.callout-note}
## The check only runs after Path A

The game does not continuously watch for the twelfth medal.

If Path A is completed before all twelve flags are set, collecting the missing medals later will not automatically reopen the final sequence. Path A must be completed again so the twelve-medal count can run again.
:::

## Compendium and medal progress

The Lore list uses the same twelve persistent medal flags as the final Path P check, but a newly earned medal may not appear there until the game is restarted. The Compendium guide covers the full access and refresh behavior.

## What the game does not reset

b0.85 has no in-game option that clears all twelve medal flags.

The hidden D1 `THE END` password resets several ending markers, including the true-ending flag and Path A–G ending flags, but it does **not** clear the zodiac medal collection.

## Troubleshooting medal progress

When the final check reports an incomplete set:

1. Confirm that every medal reached its persistent write, not only its first story appearance.
2. Restart the game and use the Lore list to identify any flag that is still missing.
3. Complete Path A again after all twelve flags are present; the check does not run when the last medal is earned elsewhere.
4. If progress moved between devices, confirm that the persistent data was transferred with the ordinary saves.

For the fastest collection order and all twelve locations, see [Twelve-Medal Collection Guide](../collectibles/medals.md).

## Related guides

- [Twelve-Medal Collection Guide](../collectibles/medals.md)
- [Lettered Path System](../guide/path-system.md)
- [Route and Path Overview](../guide/route-overview.md)

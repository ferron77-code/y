# Claude Code plugins from the "four plugins" short

Source: Alex Tavi, *"QuadCode launches key plugins to cut tokens and boost AI"*
(https://youtube.com/shorts/hcWfOiX6Oaw). The narration says "QuadCode"; it means Claude Code.
The four tools named in the clip, with the GitHub project each one resolves to:

| In the clip | Project | Pinned copy | Licence |
| --- | --- | --- | --- |
| Ponytail, cuts output tokens by 50%+ | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | v4.9.0, commit 356918e (2026-09-07) | MIT |
| OmniRoute, 300+ free providers, 1.6B free tokens/month | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | v3.8.51, commit 152d951 (2026-09-11) | MIT |
| Graphify, codebase as a knowledge graph | [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | v0.9.59, commit 522ea96 (2026-09-12) | MIT |
| Agent Skills, 24 skills by a former Google engineering director | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | v0.6.9, commit be4e44a (2026-09-11) | MIT |

## What is in this folder

- `ponytail/` and `agent-skills/` are full copies of the upstream repos (minus `.git` and `.github`).
  Both are Claude Code plugins with a marketplace manifest in `.claude-plugin/`.
- `graphify/` is the upstream repo minus its `tests/` and `worked/` example folders.
  It is a Python CLI; the Claude Code skill it installs is `graphify/graphify/skill.md`.
- `omniroute/` holds only the `skills/` folder (47 agent skills), README, LICENSE and package.json.
  The full repo is 300 MB of docs and app source; the gateway itself is an npm package.
- `settings.example.json` is a ready-made Claude Code project settings file that registers the
  Ponytail and Agent Skills marketplaces and enables both plugins.

## Turning them on in this repo

1. Copy `settings.example.json` to `.claude/settings.json` (merge if that file already exists).
   Claude Code will then install Ponytail and Agent Skills for anyone who opens this project.
2. Graphify's Claude skill is `graphify/graphify/skill.md`. Either run `graphify claude install`
   after installing the CLI, or copy that file to `.claude/skills/graphify/SKILL.md` in this repo.
   The CLI comes from `uv tool install graphifyy` (or `pip install graphifyy`);
   then `graphify .` builds `graphify-out/`.
3. OmniRoute is not auto-installed. To use it: `npm install -g omniroute`, run `omniroute`,
   then point Claude Code at `http://localhost:20128/v1`. See `omniroute/README.md`.

## Manual install, straight from upstream

```
/plugin marketplace add DietrichGebert/ponytail
/plugin install ponytail@ponytail

/plugin marketplace add addyosmani/agent-skills
/plugin install agent-skills@addy-agent-skills

uv tool install graphifyy && graphify claude install

npm install -g omniroute
```

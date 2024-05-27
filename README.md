# Game of Tones

Game of Tones is a web-based game where you identify the linguistic origin of English words.

## Developing

Once you've installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

There is also a Nix shell available if you have access to flakes

```bash
nix develop

yarn dev --open
```

## Building

To create a production version:

```bash
npm run build

# or build with Nix
nix build
```

## Note

This project includes material that is licensed under Creative Commons Attribution-ShareAlike 4.0 International License.
The original work and any modifications made are distributed under the same terms.

[This Wikipedia page](https://en.wikipedia.org/wiki/List_of_Germanic_and_Latinate_equivalents_in_English)
is licensed under CC BY-SA 4.0. A copy of this license is included in the file CC-BY-SA-4.0.txt.

The rest of the code is licensed under MIT.

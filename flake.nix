{
  description = "Game of Tones";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs = inputs @ {
    nixpkgs,
    flake-parts,
    ...
  }:
    flake-parts.lib.mkFlake {inherit inputs;} {
      perSystem = {
        self',
        pkgs,
        lib,
        ...
      }: {
        formatter = pkgs.alejandra;

        packages = {
          default = self'.packages.production;
          production = pkgs.callPackage ./nix/got.nix {basePath = "/game-of-tones";};
        };

        devShells = {
          default = pkgs.mkShell {
            inputsFrom = [self'.packages.default];
          };
        };
      };

      systems = ["aarch64-darwin" "x86_64-linux"];
    };
}

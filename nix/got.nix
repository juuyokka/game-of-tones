{
  pkgs,
  nodejs,
  yarn,
  basePath ? ""
}: let
  inherit (pkgs) lib;
  package = lib.importJSON ../package.json;
in
  pkgs.mkYarnPackage {
    inherit nodejs yarn;

    name = "got";
    src = lib.cleanSource ../.;

    env = { BASE_PATH = basePath; };

    buildPhase = "yarn --offline build";

    distPhase = "true";

    installPhase = ''
      mkdir -p $out
      mv deps/${package.name}/build/* $out
    '';
  }

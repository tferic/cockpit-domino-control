(function (root, data) {
    var loaded, module;

    /* Load into Cockpit locale */
    if (typeof cockpit === 'object') {
        cockpit.locale(data)
        loaded = true;
    }

    if (!loaded)
        root.po = data;

/* The syntax of this line is important  by po2json */
}(this, {
 "": {
  "language": ""
 },
 "Domino Control": [
  null,
  "Domino Control"
 ],
 "Running on $0": [
  null,
  "Läuft auf $0"
 ],
 "Starter Kit": [
  null,
  "Bausatz"
 ],
 "Unknown": [
  null,
  "Unbekannt"
 ]
}));

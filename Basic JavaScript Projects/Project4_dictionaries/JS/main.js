function ptable_symbols () { //This function will be called when a paragraph element is clicked
    var Atom = { //A dictionory with KVPs for Symbols:Names
        H: "Hydrogen",
        He: "Helium",
        Li: "Lithium",
        Be: "Beryllium",
        B: "Boron",
        C: "Carbon",
        N: "Nitrogen",
        O: "Oxygen",
        F: "Fluorine",
        Ne: "Neon"
    };
    delete Atom.H; //Deletes the entry for hydrogen
    document.getElementById("Dictionary").innerHTML = Atom.H; //When paragraph element (with id of Dictionary) is clicked, the page will show "undefined".
}
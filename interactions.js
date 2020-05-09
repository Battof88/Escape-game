interactions = {
    'hide' : function(item){
        if(item.name == "key"){
            item.visible = false;
            phaserObjects.inventoryKey.visible = true;
            return "Vous obtenez la clé."
        }
        else if(item.name == "cord"){
            item.visible = false;
            phaserObjects.inventoryCord.visible = true;
            return "Vous trouvez une bobine de fil électrique."
        }
    }, 
    'inventoryKey/lockedFurniture' : function(iventoryKey, lockedFurniture){
        source.visible = false;
        phaserObjects.lockedFurniture.visible = false;
        phaserObjects.unlockedFurniture.visible = true;
        phaserObjects.cord.visible = true;
        return "Vous avez ouvert le meuble."
    },
    'inventoryCord/lockedPanel' : function(inventoryCord, lockedPanel){
        source.visible = false;
        phaserObjects.lockedPanel.visible = false;
        phaserObjects.unlockedPanel.visible = true;
        phaserObjects.tvoff.visible = false;
        phaserObjects.tvon.visible = true;
        return "Vous avez actionné le panneau, le courant revient!";
    },
    'codeMatch' : function(code){
        if(code == "9372"){
            console.log("Bon code, jeu terminé.");
            return "Vous avez trouvé le code! Vous êtes libre!"
        }
        else{
            console.log("mauvais code...");
            code = "";
            return "Vous n'avez pas trouvé le bon code, réessayez."
        }
    }
}
<template>
    <div class="text-center">
        <h1>SPIELREGELN</h1>
        <p>
        'SHUT THE BOX' ist ein einfaches, aber sehr verlockendes Würfelspiel.
        Es kann als nettes Trinkspiel oder als kleines Gesellschaftsspiel für zwischendurch gespielt werden.
        </p>
        <p>
        Es besteht aus einem Würfelbrett mit 9 oder wahlweise 12 schwenkbaren Klappen,
        beschrieben mit den Ziffern 1 bis 9, bzw. 1 bis 12 und zwei Würfeln.<br>
        Zu Beginn des Spiels werden die Klappen in senkrechte Position gebracht.<br>
        Ziel ist es, alle Klappen umzuschwenken, um so eine möglichst geringe Teamsumme zu erreichen.<br>
        Das Umschwenken ist durch Würfeln und die damit erzielten Augenzahlen möglich.
        </p>
        <p>
        In dieser Version wird mit zwei Teams gespielt. TEAM 1 ist an der Reihe und muss würfeln.
        Es dürfen folgende Spielsteine umgedreht werden:<br><br>
        </p>
        <div class="rules-border">
            <p>
            - Die Summe der Augenzahlen beider Würfel<br>
            - Die Differenz der Augenzahlen der Würfel (grösserer Wert minus kleinerer Wert)<br>
            - Das Produkt der einzelnen Augenzahlen<br>
            - Die Division der Augenzahlen der einzelnen Würfel (grösserer Wert geteilt durch kleineren Wert ohne Rest)<br>
            - Die einzelnen Augenzahlen beider Würfel<br><br>
            Nach jedem Umschwenken muss neu gewürfelt werden.
            </p>
        </div>
        <p>
        <br>
        Wenn das Team etwas würfelt, das in allen oben genannten Fällen schon umgeklappt ist,
        ist das TEAM 1 mit seinem Spielzug fertig und darf nicht mehr würfeln.
        <br>
        Nun ist TEAM 2 an der Reihe.
        <br>
        <br>
        Ziel des Spiels ist es, eine NIEDRIGERE Teamsumme zu erreichen als das Gegnerteam.
        Somit hat das Team mit der höheren Punktzahl verloren.
        Danach geht das Ganze von vorne los. :-)
        </p>
        <p>Im Hauptmenü kann entschieden werden, ob man gegen einen "echten" Gegner oder eine KI antreten möchte.</p>
        <p>Außerdem kann ausgewählt werden, ob man mit einem kleinen oder einem großen Spielfeld spielen möchte.</p>
        <br>
        <button class="menu-button" @click="gotoMenu()">ZURÜCK ZUM HAUPTMENÜ</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.component("rules", {
  components: {},
  props: {},
  methods: {
    gotoMenu() {
      this.$store.dispatch("sfxBtn");
      this.$router.push("/");
    }
  }
});
</script>

<style scoped lang="less">
    .text-center {
    text-align: center;
    }

    .rules-border {
        border: 2px solid black;
        border-radius: .5rem;
        display: inline-block;
        padding: 1.5rem;
    }
</style>
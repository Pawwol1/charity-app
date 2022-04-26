import React, { useEffect, useState } from "react";
import EntitySelector from "./EntitySelector";
import "./HomeWhoWeHelp.scss";

import HomeWhoWeHelpHeader from "./HomeWhoWeHelpHeader";
import EntityGroupDescription from "./EntityGroupDescription";
import EntityList from "./EntityList";
import PageSelector from "./PageSelector";

export default function HomeWhoWeHelp() {
  const entityGroupDesc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
  const foundations = [
    {
      id: 1,
      name: "Organizacja “Lorem Ipsum 1”",
      subtitle: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
      list: ["Egestas", "sed", "tempus"],
    },
    {
      id: 2,
      name: "Organizacja “Lorem Ipsum 2”",
      subtitle:
        "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
      list: ["Ut", "aliquam", "purus", "sit", "amet"],
    },
    {
      id: 3,
      name: "Organizacja “Lorem Ipsum 3”",
      subtitle: "Scelerisque in dictum non consectetur a erat nam.",
      list: ["Mi", "quis", "hendrerit", "dolor"],
    },
    {
      id: 4,
      name: "Organizacja “Lorem Ipsum 4”",
      subtitle: "Scelerisque in dictum non consectetur a erat nam.",
      list: ["Mi", "quis", "hendrerit", "dolor"],
    },
    {
      id: 5,
      name: "Brainsphere",
      subtitle: "In hac habitasse platea dictumst.",
      list: ["noodles, salads, pasta, soups"],
    },
    {
      id: 6,
      name: "Twitterbridge",
      subtitle: "Maecenas tincidunt lacus at velit.",
      list: ["noodles, sandwiches, stews"],
    },
  ];
  const ngos = [
    {
      id: 1,
      name: "Skidoo",
      subtitle: "In blandit ultrices enim.",
      list: ["Mi", "quis", "hendrerit", "dolor"],
    },
    {
      id: 2,
      name: "Skiptube",
      subtitle: "Vivamus vel nulla eget eros elementum pellentesque.",
      list: ["Mi", "quis", "hendrerit", "dolor"],
    },
    {
      id: 3,
      name: "Midel",
      subtitle: "Nam dui.",
      list: ["Mi", "quis", "hendrerit", "dolor"],
    },
    {
      id: 4,
      name: "Jetpulse",
      subtitle: "Phasellus in felis.",
      list: ["Mi", "quis", "hendrerit", "dolor"],
    },
    {
      id: 5,
      name: "Quatz",
      subtitle: "Suspendisse ornare consequat lectus.",
      list: ["Mi", "quis", "hendrerit", "dolor"],
    },
    {
      id: 6,
      name: "Skalith",
      subtitle: "Suspendisse potenti.",
      list: ["Mi", "quis", "hendrerit", "dolor"],
    },
  ];
  const local = [
    {
      id: 1,
      name: "Realfire",
      subtitle: "Nullam varius.",
      list: ["noodles, pies, salads, pasta, stews"],
    },
    {
      id: 2,
      name: "Zoomzone",
      subtitle:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      list: ["sandwiches, soups"],
    },
    {
      id: 3,
      name: "Skibox",
      subtitle: "Nunc nisl.",
      list: ["noodles, soups, seafood"],
    },
  ];

  const [selected, setSelected] = useState(foundations);
  const [currentPageContent, setCurrentPageContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const selectEntity = (id) => {
    setCurrentPage(1);
    if (id === 1) {
      setSelected(foundations);
      return;
    }
    if (id === 2) {
      setSelected(ngos);
      return;
    }
    if (id === 3) {
      setSelected(local);
      return;
    }
  };

  const filterPage = (pageNumber) => {
    setCurrentPageContent(
      selected.filter((entity, idx) => {
        return (pageNumber - 1) * 3 <= idx && idx < pageNumber * 3;
      })
    );
  };
  useEffect(() => {
    filterPage(currentPage);
  }, [currentPage, selected]);

  return (
    <section className="who-we-help" name="who-we-help">
      <HomeWhoWeHelpHeader />
      <EntitySelector callback={selectEntity} />
      <EntityGroupDescription description={entityGroupDesc} />
      <EntityList entities={currentPageContent} />
      {selected.length > 3 && (
        <PageSelector
          entities={selected}
          callback={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </section>
  );
}

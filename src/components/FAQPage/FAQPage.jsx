import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';

import './FAQPage.scss';

function FAQPage() {
  return (
    <Container>
      <Header as="h1">FAQ</Header>
      <List>
        <List.Item>
          <Header as="h2">A quoi ça sert ?</Header>
          <p>
            Cette application permet de trouver une liste de dépôts GitHub pour
            un critère donné.
          </p>
        </List.Item>
        <List.Item>
          <Header as="h2">Comment faire une recherche ?</Header>
          <p>
            Sur la page recherche, complétez le champ de recherche et validez la
            recherche.
          </p>
        </List.Item>
        <List.Item>
          <Header as="h2">Puis-je chercher n&apos;importe quel terme ?</Header>
          <p>Oui, c&apos;est fou.</p>
        </List.Item>
      </List>
    </Container>
  );
}

export default FAQPage;

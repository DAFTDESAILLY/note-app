import React from "react";
import { Header as SemanticHeader, Icon } from "semantic-ui-react";

export default function Header() {
  return (
    <div className="header">
      <SemanticHeader as="h1" icon textAlign="center" color="violet">
        <Icon inverted color="violet" name="list alternate outline" circular />
        <SemanticHeader.Content>listado de tareas</SemanticHeader.Content>
      </SemanticHeader>
    </div>
  );
}

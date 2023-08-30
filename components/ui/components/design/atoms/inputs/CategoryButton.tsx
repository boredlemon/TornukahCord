import {
  BiRegularLinkExternal,
  BiSolidChevronDown,
  BiSolidChevronRight,
  BiSolidPencil,
} from "solid-icons/bi";
import { For, JSX, Match, Show, Switch } from "solid-js";
import { styled } from "solid-styled-components";

import { Column, OverflowingText } from "../../layout";

/**
 * Permissible actions
 */
type Action = "chevron" | "collapse" | "external" | "edit" | JSX.Element;

export interface Props {
  readonly icon?: JSX.Element | "blank";
  readonly children?: JSX.Element;
  readonly description?: JSX.Element;

  readonly onClick?: () => void;
  readonly action?: Action | Action[];
}

/**
 * Category Button
 */
export function CategoryButton(props: Props) {
  return (
    <Base isLink={!!props.onClick} onClick={props.onClick}>
      <Switch fallback={props.icon}>
        <Match when={props.icon === "blank"}>
          <Blank />
        </Match>
      </Switch>
      <Content grow gap="sm">
        <Show when={props.children}>
          <OverflowingText>{props.children}</OverflowingText>
        </Show>
        <Show when={props.description}>
          <Description>{props.description}</Description>
        </Show>
      </Content>
      <For each={Array.isArray(props.action) ? props.action : [props.action]}>
        {(action) => (
          <Switch fallback={action}>
            <Match when={action === "chevron"}>
              <BiSolidChevronRight size={24} />
            </Match>
            <Match when={action === "collapse"}>
              <BiSolidChevronDown size={24} />
            </Match>
            <Match when={action === "edit"}>
              <BiSolidPencil size={20} />
            </Match>
            <Match when={action === "external"}>
              <BiRegularLinkExternal size={20} />
            </Match>
          </Switch>
        )}
      </For>
    </Base>
  );
}

/**
 * Blank icon
 */
const Blank = styled.div`
  width: 24px;
`;

/**
 * Base container for button
 */
const Base = styled("a", "CategoryButton")<{ isLink: boolean }>`
  gap: 12px;
  padding: 10px 12px;

  color: ${(props) => props.theme!.colours["foreground"]};
  border-radius: ${(props) => props.theme!.borderRadius.md};
  background: ${(props) => props.theme!.colours["background-300"]};

  user-select: none;
  cursor: ${(props) => (props.isLink ? "pointer" : "initial")};
  transition: ${(props) => props.theme!.transitions.fast} all;

  display: flex;
  align-items: center;
  flex-direction: row;

  > svg {
    flex-shrink: 0;
  }

  &:hover {
    filter: ${(props) => (props.isLink ? props.theme!.effects.hover : "unset")};
  }

  &:active {
    filter: ${(props) =>
      props.isLink ? props.theme!.effects.active : "unset"};
  }
`;

/**
 * Title and description styles
 */
const Content = styled(Column)`
  font-weight: 600;
  font-size: 0.875rem;
`;

/**
 * Description shown below title
 */
const Description = styled.span`
  font-weight: 400;
  font-size: 0.6875rem;
  color: ${(props) => props.theme!.colours["foreground-200"]};

  a:hover {
    text-decoration: underline;
  }
`;

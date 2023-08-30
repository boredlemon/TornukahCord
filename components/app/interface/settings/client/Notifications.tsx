import {
  BiSolidBell,
  BiSolidNotification,
  BiSolidSpeaker,
} from "solid-icons/bi";

import { useTranslation } from "@revolt/i18n";
import {
  CategoryButton,
  CategoryCollapse,
  Checkbox,
  Column,
  Disabled,
  FormGroup,
} from "@revolt/ui";

/**
 * Notifications Page
 */
export default function Notifications() {
  const t = useTranslation();

  return (
    <Disabled>
      <Column>
        <FormGroup>
          <CategoryButton
            action={<Checkbox value onChange={(value) => void value} />}
            onClick={() => void 0}
            icon={<BiSolidBell size={24} />}
            description={t(
              "app.settings.pages.notifications.descriptions.enable_desktop"
            )}
          >
            {t("app.settings.pages.notifications.enable_desktop")}
          </CategoryButton>
        </FormGroup>
        <FormGroup>
          <CategoryButton
            action={<Checkbox value onChange={(value) => void value} />}
            onClick={() => void 0}
            icon={<BiSolidNotification size={24} />}
            description={t(
              "app.settings.pages.notifications.descriptions.enable_push"
            )}
          >
            {t("app.settings.pages.notifications.enable_push")}
          </CategoryButton>
        </FormGroup>
        <CategoryCollapse
          title={t("app.settings.pages.notifications.sounds")}
          icon={<BiSolidSpeaker size={24} />}
        >
          <FormGroup>
            <CategoryButton
              action={<Checkbox value onChange={(value) => void value} />}
              onClick={() => void 0}
              icon="blank"
            >
              {t("app.settings.pages.notifications.sound.message")}
            </CategoryButton>
          </FormGroup>
          <FormGroup>
            <CategoryButton
              action={<Checkbox onChange={(value) => void value} />}
              onClick={() => void 0}
              icon="blank"
            >
              {t("app.settings.pages.notifications.sound.outbound")}
            </CategoryButton>
          </FormGroup>
          <FormGroup>
            <CategoryButton
              action={<Checkbox value onChange={(value) => void value} />}
              onClick={() => void 0}
              icon="blank"
            >
              {t("app.settings.pages.notifications.sound.call_join")}
            </CategoryButton>
          </FormGroup>
          <FormGroup>
            <CategoryButton
              action={<Checkbox value onChange={(value) => void value} />}
              onClick={() => void 0}
              icon="blank"
            >
              {t("app.settings.pages.notifications.sound.call_leave")}
            </CategoryButton>
          </FormGroup>
        </CategoryCollapse>
      </Column>
    </Disabled>
  );
}

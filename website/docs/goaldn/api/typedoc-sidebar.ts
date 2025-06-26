import { SidebarsConfig } from "@docusaurus/plugin-content-docs";
const typedocSidebar: SidebarsConfig = {
  items: [
    {
      type: "category",
      label: "Base",
      items: [
        {
          type: "doc",
          id: "goaldn/api/variables/Button",
          label: "Button"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/Txt",
          label: "Txt"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/ButtonImpl",
          label: "ButtonImpl"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/cn",
          label: "cn"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/InputLabel",
          label: "InputLabel"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/ScaledIcon",
          label: "ScaledIcon"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/TxtImpl",
          label: "TxtImpl"
        }
      ]
    },
    {
      type: "category",
      label: "Bluetooth",
      items: [
        {
          type: "doc",
          id: "goaldn/api/variables/bleManagerAtom",
          label: "bleManagerAtom"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/connectedDeviceAtom",
          label: "connectedDeviceAtom"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/isBondingRequiredAtom",
          label: "isBondingRequiredAtom"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/isMockEnabled",
          label: "isMockEnabled"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/MOCK_DEVICE_ID",
          label: "MOCK_DEVICE_ID"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/MOCK_DEVICE_NAME",
          label: "MOCK_DEVICE_NAME"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/mockPeripheral",
          label: "mockPeripheral"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/BluetoothConnectionButton",
          label: "BluetoothConnectionButton"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/BluetoothConnectionMonitor",
          label: "BluetoothConnectionMonitor"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/BluetoothConnectionScreen",
          label: "BluetoothConnectionScreen"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/getBleManager",
          label: "getBleManager"
        }
      ]
    },
    {
      type: "category",
      label: "Forms",
      items: [
        {
          type: "doc",
          id: "goaldn/api/functions/CheckboxField",
          label: "CheckboxField"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/EnumField",
          label: "EnumField"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/SliderField",
          label: "SliderField"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/StringField",
          label: "StringField"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/SwitchField",
          label: "SwitchField"
        }
      ]
    },
    {
      type: "category",
      label: "Forms Utils",
      items: [
        {
          type: "doc",
          id: "goaldn/api/type-aliases/FieldConfig",
          label: "FieldConfig"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/FieldConfigAtom",
          label: "FieldConfigAtom"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/FieldConfigOption",
          label: "FieldConfigOption"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/FieldConfigOptionInfos",
          label: "FieldConfigOptionInfos"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/fieldDisplayMode",
          label: "fieldDisplayMode"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/FieldValueError",
          label: "FieldValueError"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/fieldConfigAtom",
          label: "fieldConfigAtom"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/getFieldValidationError",
          label: "getFieldValidationError"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/useAllFormFieldsValues",
          label: "useAllFormFieldsValues"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/useCheckAllFormFieldValues",
          label: "useCheckAllFormFieldValues"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/useCheckSomeFormFieldValue",
          label: "useCheckSomeFormFieldValue"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/useFormField",
          label: "useFormField"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/useFormFieldValue",
          label: "useFormFieldValue"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/useSetAllFormFields",
          label: "useSetAllFormFields"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/useSetFormField",
          label: "useSetFormField"
        }
      ]
    },
    {
      type: "category",
      label: "Layout",
      items: [
        {
          type: "doc",
          id: "goaldn/api/functions/Avatar",
          label: "Avatar"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/BottomView",
          label: "BottomView"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/Card",
          label: "Card"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/CollapsableCard",
          label: "CollapsableCard"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/ImageCarousel",
          label: "ImageCarousel"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/ScaledTooltip",
          label: "ScaledTooltip"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/Tooltip",
          label: "Tooltip"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/ViewWithFooter",
          label: "ViewWithFooter"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/ViewWithStepper",
          label: "ViewWithStepper"
        }
      ]
    },
    {
      type: "category",
      label: "Media",
      items: [
        {
          type: "doc",
          id: "goaldn/api/functions/generatePDF",
          label: "generatePDF"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/savePDF",
          label: "savePDF"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/sharePDF",
          label: "sharePDF"
        }
      ]
    },
    {
      type: "category",
      label: "Misc",
      items: [
        {
          type: "doc",
          id: "goaldn/api/functions/HexKeyboard",
          label: "HexKeyboard"
        }
      ]
    },
    {
      type: "category",
      label: "Navigation",
      items: [
        {
          type: "doc",
          id: "goaldn/api/interfaces/MenuProps",
          label: "MenuProps"
        },
        {
          type: "doc",
          id: "goaldn/api/interfaces/ScreensProps",
          label: "ScreensProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/OptionFunction",
          label: "OptionFunction"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/RemoveBackButtonOption",
          label: "RemoveBackButtonOption"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/RemoveHeaderOption",
          label: "RemoveHeaderOption"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/AvatarOption",
          label: "AvatarOption"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/CloseIconOption",
          label: "CloseIconOption"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/CombineOptions",
          label: "CombineOptions"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/FadeInOption",
          label: "FadeInOption"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/LanguageSwitcherOption",
          label: "LanguageSwitcherOption_"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/MainNavigator",
          label: "MainNavigator"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/ScreenNavigator",
          label: "ScreenNavigator"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/TitleOption",
          label: "TitleOption"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/useHideTabBar",
          label: "useHideTabBar"
        }
      ]
    },
    {
      type: "category",
      label: "Settings",
      items: [
        {
          type: "doc",
          id: "goaldn/api/variables/detectFromDensityAtom",
          label: "detectFromDensityAtom"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/detectFromScaleAtom",
          label: "detectFromScaleAtom"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/detectSmallScreenAtom",
          label: "detectSmallScreenAtom"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/deviceLng",
          label: "deviceLng"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/languageAtom",
          label: "languageAtom"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/smallScreenAtom",
          label: "smallScreenAtom"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/userSetSmallScreenAtom",
          label: "userSetSmallScreenAtom"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/GenericSettings",
          label: "GenericSettings"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/getFontScale",
          label: "getFontScale"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/getLanguages",
          label: "getLanguages"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/getPixelDensity",
          label: "getPixelDensity"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/initI18n",
          label: "initI18n"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/LanguageSwitcher",
          label: "LanguageSwitcher"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/useInitAndSyncLanguage",
          label: "useInitAndSyncLanguage"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/useTranslator",
          label: "useTranslator"
        }
      ]
    },
    {
      type: "category",
      label: "State Management",
      items: [
        {
          type: "doc",
          id: "goaldn/api/functions/CheckboxAtom",
          label: "CheckboxAtom"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/EnumAtom",
          label: "EnumAtom"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/storedAtom",
          label: "storedAtom"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/StringAtom",
          label: "StringAtom"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/SwitchAtom",
          label: "SwitchAtom"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/useAllAtomsValues",
          label: "useAllAtomsValues"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/useCheckAllAtomValues",
          label: "useCheckAllAtomValues"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/useCheckSomeAtomValue",
          label: "useCheckSomeAtomValue"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/useSetAllAtoms",
          label: "useSetAllAtoms"
        }
      ]
    },
    {
      type: "category",
      label: "Styling",
      items: [
        {
          type: "doc",
          id: "goaldn/api/variables/getColors",
          label: "getColors"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/initThemeColors",
          label: "initThemeColors"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/useColorScheme",
          label: "useColorScheme"
        }
      ]
    },
    {
      type: "category",
      label: "Types",
      items: [
        {
          type: "doc",
          id: "goaldn/api/type-aliases/AvatarProps",
          label: "AvatarProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/BluetoothConnectionButtonProps",
          label: "BluetoothConnectionButtonProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/ButtonProps",
          label: "ButtonProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/buttonVariantsType",
          label: "buttonVariantsType"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/CheckboxAtomProps",
          label: "CheckboxAtomProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/CheckboxFieldProps",
          label: "CheckboxFieldProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/colorsType",
          label: "colorsType"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/EnumAtomProps",
          label: "EnumAtomProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/EnumAtomValueProps",
          label: "EnumAtomValueProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/EnumFieldProps",
          label: "EnumFieldProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/EnumFieldValueProps",
          label: "EnumFieldValueProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/InputLabelProps",
          label: "InputLabelProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/PDFGenerationOptions",
          label: "PDFGenerationOptions"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/ScaledIconProps",
          label: "ScaledIconProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/ScaledTooltipProps",
          label: "ScaledTooltipProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/SliderFieldProps",
          label: "SliderFieldProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/StepperConfig",
          label: "StepperConfig"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/StepperProps",
          label: "StepperProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/StringAtomProps",
          label: "StringAtomProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/StringFieldProps",
          label: "StringFieldProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/SwitchAtomProps",
          label: "SwitchAtomProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/SwitchFieldProps",
          label: "SwitchFieldProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/TooltipProps",
          label: "TooltipProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/TxtProps",
          label: "TxtProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/ViewWithFooterProps",
          label: "ViewWithFooterProps"
        },
        {
          type: "doc",
          id: "goaldn/api/type-aliases/ViewWithStepperProps",
          label: "ViewWithStepperProps"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/buttonTextVariants",
          label: "buttonTextVariants"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/buttonVariants",
          label: "buttonVariants"
        },
        {
          type: "doc",
          id: "goaldn/api/variables/buttonVariantsConfig",
          label: "buttonVariantsConfig"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/newStepperConfig",
          label: "newStepperConfig"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/Stepper",
          label: "Stepper"
        },
        {
          type: "doc",
          id: "goaldn/api/functions/textColorForVariant",
          label: "textColorForVariant"
        }
      ]
    },
    {
      type: "category",
      label: "Utils",
      items: [
        {
          type: "doc",
          id: "goaldn/api/functions/useDateFormatter",
          label: "useDateFormatter"
        }
      ]
    }
  ]
};
export default typedocSidebar;
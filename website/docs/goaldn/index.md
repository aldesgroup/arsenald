---
sidebar_position: 1
---

# GoaldN Documentation

GoaldN is the React Native mobile development component of the Devotion stack. It provides a comprehensive framework for building cross-platform mobile applications with native performance and modern development practices.

## Features

- **Cross-platform Development**: Write once, run on both iOS and Android
- **Native UI Components**: Access to platform-specific UI elements and behaviors
- **Advanced Navigation**: Built-in navigation system with deep linking support
- **State Management**: Integrated state management with Redux or Context API
- **Platform Optimizations**: Automatic platform-specific code splitting and optimization
- **Hot Reloading**: Fast development cycle with instant code updates
- **TypeScript Support**: Full TypeScript integration for better development experience

## Getting Started with GoaldN

### Installation

1. Let's first create (under, say, GitHub or GitLab, or whatever) a blank project `MyAwesomeProject` (replace with your own name), then git-clone it into your git projects folder
2. Let's dive into it: `cd $MYGITFOLDER/myawesomeproject`
3. Following [these instructions](https://reactnative.dev/docs/getting-started-without-a-framework):
   1. Let's [setup our dev environment](https://reactnative.dev/docs/set-up-your-environment)
      1. from here, maybe just `aldev bootstrap -native MyAwesomeProject` ?
   2. Remove the old installation if any: `npm uninstall -g react-native-cli @react-native-community/cli`
   3. Let's install something fresh: `npx @react-native-community/cli@latest init MyAwesomeProject`
   4. Let's prepare for monorepo mode: `mv MyAwesomeProject native`
   5. Let's install the deps: `cd native && npm i`
   6. Let's start the app (Android version):

### Development Setup

1. **Start Metro bundler**:
   ```bash
   npm start
   ```

2. **Run on Android**:
   ```bash
   npm run android
   ```

3. **Run on iOS**:
   ```bash
   npm run ios
   ```

4. Then you can [start developing](./start.md)

## Integration with Other Components

GoaldN seamlessly integrates with other Devotion stack components:

- **Aldev**: Development tools and utilities
  - Code generation
  - Live reloading
  - External resources download

- **Goald**: Backend services and APIs
  - RESTful API integration
  - Real-time communication
  - Authentication services
  - Data synchronization

- **GoaldR**: Shared components and utilities
  - Common UI components
  - Utility functions
  - Type definitions
  - Business logic

## API Reference

The GoaldN API provides comprehensive functionality for mobile app development:

### Core Components

- **Navigation**: React Navigation integration with custom configurations
- **State Management**: Redux Toolkit or Context API setup
- **Networking**: Axios-based HTTP client with interceptors
- **Storage**: AsyncStorage and SecureStore utilities
- **Permissions**: Platform-specific permission handling
- **Device Info**: Device and platform information utilities

### UI Components

- **Button**: Customizable button components with loading states
- **Input**: Form input components with validation
- **List**: Optimized list components for large datasets
- **Image**: Image components with caching and optimization

### Utilities

- **Validation**: Form validation utilities
- **Formatting**: Date, number, and text formatting
- **Localization**: Internationalization support

For detailed API documentation, see the [API Reference](./api/index.md) section.

## Troubleshooting

Common issues and solutions:

- **Metro bundler issues**: Clear cache with `npm start -- --reset-cache`
- **iOS build problems**: Clean build folder in Xcode
- **Android build issues**: Clean project with `cd android && ./gradlew clean`

## Support

For additional support and resources:

- [GitHub Repository](https://github.com/devotion/goaldn)
- [Issue Tracker](https://github.com/devotion/goaldn/issues)
- [Community Discord](https://discord.gg/devotion)
- [Documentation](https://docs.devotion.dev/goaldn)
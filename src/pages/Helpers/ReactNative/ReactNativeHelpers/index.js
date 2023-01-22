import React from "react";
import CodeBlockComponent from "../../../../components/CodeBlock";

function ReactNativeComponent(props) {
  return (
    <>
      <CodeBlockComponent
        header={" Create React Native App"}
        logic={`npx react-native init ProjectName`}
      />
      <CodeBlockComponent
        header={" Basic Project Repo Libraries"}
        logic={`npm i --save @react-native-masked-view/masked-view @react-navigation/native @react-navigation/stack formik metro-config yup react-native-gesture-handler react-native-safe-area react-native-safe-area-context react-native-screens react-native-svg react-native-svg-transformer react-native-vector-icons lodash @react-navigation/bottom-tabs lottie-react-native react-native-iphone-x-helper @react-native-async-storage/async-storage react-native-toast-message react-native-reanimated`}
      />
      <CodeBlockComponent
        header={" Ruby Helpers"}
        logic={`
            rvm reinstall ruby-2.7.5
            rvm use —default ruby-2.7.5
            rvm list
            rvm remove ruby-2.7.5`}
      />
      <CodeBlockComponent
        header={" Release App Commands"}
        logic={`
        npx react-native run-android --variant=release
        npx react-native run-ios --variant=release
        `}
      />
      <CodeBlockComponent
        header={" Mobile Connections"}
        logic={`
        cd ~/Library/Android/sdk/emulator
        ./emulator -avd New_Device_API_2
        ./emulator -list-avds

        adb kill-server
        adb start-server
        adb reverse tcp:8081 tcp:8081
        `}
      />

      <CodeBlockComponent
        header={" React Native Create Debug/Release App"}
        logic={`
        npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

        npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res&& cd android && ./gradlew assembleDebug
       
        ./gradlew bundleRelease
        ./gradlew assembleDebug
        `}
      />
    </>
  );
}

export default ReactNativeComponent;

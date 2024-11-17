import { Text, View } from 'react-native';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>{title}</Text>
      {children}
    </View>
  );
};
const styles = {
  container: `p-safe mx-safe pt-safe-or-4 bg-red-400`,
  title: `text-xl font-bold`,
};

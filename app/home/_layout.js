import { Stack } from "expo-router";
const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="Dashboard" options={{ headerShown: false }} />
            <Stack.Screen
                name="Accepted"
                options={{ title: "التبرعات المقبولة" }}
            />
            <Stack.Screen
                name="Rejected"
                options={{ title: "الأجهزة المرفوضة" }}
            />
            <Stack.Screen
                name="Pending"
                options={{ title: "التبرعات في انتظار الموافقة" }}
            />
            <Stack.Screen
                name="PendingRequest"
                options={{ title: "الطلبات في انتظار الموافقة" }}
            />
            <Stack.Screen name="Given" options={{ title: "الاجهزة الممنحة" }} />
        </Stack>
    );
};

export default Layout;

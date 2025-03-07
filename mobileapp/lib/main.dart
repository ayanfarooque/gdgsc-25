import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import './assets/pages/home.dart';
import './assets/pages/assignment/landing.dart';
import './assets/pages/aibot/landing.dart';
import './assets/pages/resources/landing.dart';
import './assets/pages/community/landing.dart';
import './assets/pages/score.dart';
import './assets/pages/profile.dart';
import './assets/pages/notification.dart';
import './assets/pages/sisu.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Default to not logged in
  bool isLoggedIn = false;

  try {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('token');
    // Only set to true if token exists and is not empty
    isLoggedIn = token != null && token.isNotEmpty;
    print("Token found: $isLoggedIn");
  } catch (e) {
    print("Error checking login status: $e");
    // Keep isLoggedIn as false on error
  }

  runApp(MyApp(isLoggedIn: isLoggedIn));
}

class MyApp extends StatelessWidget {
  final bool isLoggedIn;

  const MyApp({super.key, required this.isLoggedIn});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Multi-Page App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        fontFamily: 'CustomFont',
        textTheme: TextTheme(
          bodyLarge: TextStyle(
              fontFamily: 'CustomFont',
              fontSize: 18,
              fontWeight: FontWeight.w100),
          bodyMedium: TextStyle(
              fontFamily: 'CustomFont',
              fontSize: 16,
              fontWeight: FontWeight.w100),
          bodySmall: TextStyle(
              fontFamily: 'CustomFont',
              fontSize: 14,
              fontWeight: FontWeight.w100),
        ),
      ),
      initialRoute: isLoggedIn ? '/' : '/auth',
      routes: {
        '/': (context) => const HomePage(),
        '/auth': (context) => const AuthPage(),
        '/assignment': (context) => AssignmentLanding(),
        '/aibot': (context) => AiLanding(),
        '/resources': (context) => ResourceLanding(),
        '/community': (context) => CommunityLanding(),
        '/viewscore': (context) => ViewScores(),
        '/profile': (context) => Profile(studentId: '1'),
        '/notifications': (context) =>
            ViewNotifications(studentId: '603dcd7f1c4ae72f8c8b4571'),
      },
      onGenerateRoute: (settings) {
        // If user is not logged in, redirect all routes except /auth to the auth page
        if (!isLoggedIn && settings.name != '/auth') {
          return MaterialPageRoute(
            builder: (context) => const AuthPage(),
          );
        }
        return null; // Let the routes above handle the navigation
      },
    );
  }
}

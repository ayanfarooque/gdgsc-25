import 'package:flutter/material.dart';
import './assets/pages/home.dart';
import './assets/pages/assignment/landing.dart';
import './assets/pages/aibot/landing.dart';
import './assets/pages/resources/landing.dart';
import './assets/pages/community/landing.dart';
import './assets/pages/score.dart';
import './assets/pages/profile.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
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
      initialRoute: '/',
      routes: {
        '/': (context) => const HomePage(),
        '/assignment': (context) => AssignmentLanding(),
        '/aibot': (context) => AiLanding(),
        '/resources': (context) => ResourceLanding(),
        '/community': (context) => CommunityLanding(),
        '/viewscore': (context) => ViewScores(),
        '/profile': (context) => Profile(),
      },
    );
  }
}

#!/usr/bin/env python3
"""
Life.py - A motivational Python script that uses programming metaphors
to express life philosophy and personal growth concepts.
"""

import time
import random
from datetime import datetime, timedelta

class Life:
    """A class representing life with healing capabilities."""
    
    @staticmethod
    def heal():
        """Time heals all wounds - a metaphorical healing function."""
        print("🕐 Time is healing your wounds...")
        time.sleep(1)
        print("✨ Healing complete. You're stronger than before.")

class Friends:
    """A class to manage friendships and relationships."""
    
    @staticmethod
    def remove_toxic_attitudes():
        """Remove toxic people from your life."""
        toxic_friends = ["negative_nancy", "complainer_chris", "drama_dave"]
        removed = [friend for friend in toxic_friends if "toxic" in friend]
        print(f"🗑️ Removed {len(removed)} toxic friends from your life.")
        return removed

class DailyRoutine:
    """A class representing daily life activities."""
    
    def __init__(self):
        self.energy = 100
        self.money = 0
        self.success = False
        
    def eat(self):
        """Eat to maintain energy."""
        self.energy = min(100, self.energy + 20)
        print("🍽️ Eating... Energy restored!")
        
    def sleep(self):
        """Sleep to recover energy."""
        self.energy = min(100, self.energy + 30)
        print("😴 Sleeping... Energy fully restored!")
        
    def code(self):
        """Code to build skills and make money."""
        self.energy -= 15
        self.money += 50
        print("💻 Coding... Skills improving, money earned!")
        
    def make_money(self):
        """Make money through various activities."""
        earnings = random.randint(10, 100)
        self.money += earnings
        print(f"💰 Made ${earnings} today!")
        
    def is_tired(self):
        """Check if you're tired."""
        return self.energy < 30
        
    def take_a_break(self):
        """Take a break when tired."""
        print("☕ Taking a break... Rest is important for productivity.")
        self.energy = min(100, self.energy + 25)

class CodingSession:
    """A class representing focused coding sessions."""
    
    def __init__(self):
        self.drink_coffee = True
        self.focus = 100
        self.headphones_on = True
        
    def start_session(self):
        """Start a focused coding session."""
        print("☕ Coffee ready... 🎧 Headphones on... Let's code!")
        print("🎯 Focus level: 100%")
        return self.focus

class SuccessJourney:
    """A class representing the journey to success."""
    
    def __init__(self):
        self.success = False
        self.improvement = 0
        self.fear = 100
        
    def handle_failure(self):
        """Handle failure by not giving up and keeping improving."""
        print("❌ Failed? Don't give up!")
        self.improvement += random.randint(5, 15)
        print(f"📈 Improvement level: {self.improvement}")
        print("🔄 Trying again with new knowledge...")
        
    def check_success(self):
        """Check if improvement has overcome fear."""
        if self.improvement > self.fear:
            self.success = True
            print("🎉 SUCCESS! You've overcome your fears!")
        return self.success

class Memories:
    """A class to manage life memories."""
    
    @staticmethod
    def get_joyful_memories():
        """Retrieve joyful memories from life."""
        joyful_memories = [
            "Graduation day",
            "First successful project",
            "Time with family",
            "Achieving a personal goal",
            "Helping someone in need"
        ]
        return joyful_memories
    
    @staticmethod
    def get_positive_memories():
        """Get memories associated with positivity."""
        positive_memories = {
            "joy": ["Birthday celebrations", "Achievements"],
            "love": ["Family moments", "Friendships"],
            "growth": ["Learning experiences", "Overcoming challenges"]
        }
        return positive_memories

class SelfImprovement:
    """A class to track personal growth."""
    
    @staticmethod
    def check_progress(today, yesterday):
        """Check if you're on the right path."""
        if today > yesterday:
            print("✅ You are on the right path!")
            print("🚀 Keep moving forward!")
            return True
        else:
            print("📊 Progress is progress, no matter how small.")
            return False

def main():
    """Main function to run the life simulation."""
    print("🌟 Welcome to Life.py - Your Personal Growth Journey")
    print("=" * 50)
    
    # Time heals
    Life.heal()
    print()
    
    # Remove toxic friends
    Friends.remove_toxic_attitudes()
    print()
    
    # Daily routine simulation
    routine = DailyRoutine()
    print("📅 Starting daily routine...")
    
    for day in range(3):
        print(f"\n🌅 Day {day + 1}:")
        routine.eat()
        routine.sleep()
        routine.code()
        routine.make_money()
        
        if routine.is_tired():
            routine.take_a_break()
    
    # Coding session
    session = CodingSession()
    session.start_session()
    print()
    
    # Success journey
    journey = SuccessJourney()
    print("🎯 Starting success journey...")
    
    attempts = 0
    while not journey.success and attempts < 5:
        attempts += 1
        print(f"\n🔄 Attempt {attempts}:")
        journey.handle_failure()
        
        if journey.check_success():
            break
    
    # Memories
    print("\n💭 Retrieving joyful memories...")
    memories = Memories.get_joyful_memories()
    for memory in memories:
        print(f"   ✨ {memory}")
    
    # Positive memories
    print("\n🌈 Positive memories by category:")
    positive = Memories.get_positive_memories()
    for category, mem_list in positive.items():
        print(f"   {category.upper()}: {', '.join(mem_list)}")
    
    # Self-improvement check
    print("\n📈 Self-improvement check:")

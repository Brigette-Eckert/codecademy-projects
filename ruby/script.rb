print "What's your first name?"
first_name= gets.chomp
first_name.capitalize!

print "What is your last name?"
last_name = gets.chomp
last_name.capitalize! 

print "What city are you from?"
city= gets.chomp.capitalize! 

print "What state or providence are you from?"
state=gets.chomp
state.capitalize

print "Hi #{first_name} #{last_name} from #{city} #{state}!"
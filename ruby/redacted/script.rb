puts "Type text here"
text=gets.chomp
puts "Add more text"
redact = gets.chomp
 words = text.split(" ")
 
 words.each do |w|
  if w == redact    
    print "REDACTED "
  else print w + " "  
end 
end
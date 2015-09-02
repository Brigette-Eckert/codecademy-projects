def alphabetize(arr, rev=false)
arr.sort! 
if rev == true 
    arr.reverse!
end
    return arr
end

numbers = [23, 57, 82, 36, 15]

puts alphabetize(numbers)
    
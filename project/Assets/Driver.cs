using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Driver : MonoBehaviour
{
    [SerializeField] float streerSpeed = 300f;
    [SerializeField] float moveSpeed = 20f;
    void Start()
    {
    }

    void Update()
    {
        float streetAmount = Input.GetAxis("Horizontal") * streerSpeed * Time.deltaTime;
        float moveAmount = Input.GetAxis("Vertical") * moveSpeed * Time.deltaTime;
        transform.Rotate(0, 0, -streetAmount);
        transform.Translate(0, moveAmount, 0);
    }
}

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      brand: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      category: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      order: {
        Row: {
          alt_codes: string[] | null
          created_at: string
          customer: number | null
          delivery: boolean
          email: string | null
          fulfilled: boolean
          full_name: string | null
          id: string
          metadata: Json | null
          payment_id: string
          products: Json
          shipping_address: Json
          shipping_amount: number
          total_amount: number
        }
        Insert: {
          alt_codes?: string[] | null
          created_at?: string
          customer?: number | null
          delivery?: boolean
          email?: string | null
          fulfilled?: boolean
          full_name?: string | null
          id: string
          metadata?: Json | null
          payment_id: string
          products: Json
          shipping_address: Json
          shipping_amount: number
          total_amount: number
        }
        Update: {
          alt_codes?: string[] | null
          created_at?: string
          customer?: number | null
          delivery?: boolean
          email?: string | null
          fulfilled?: boolean
          full_name?: string | null
          id?: string
          metadata?: Json | null
          payment_id?: string
          products?: Json
          shipping_address?: Json
          shipping_amount?: number
          total_amount?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_customer_fkey"
            columns: ["customer"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      product: {
        Row: {
          brand: number | null
          id: number
          image_urls: string[] | null
          manufacturer_code: string | null
          name: string
          on_sale: boolean
          original_price: number
          price: number
          quantity: number
          sku: string
          specifications: Json | null
          variants: Json | null
          name_sku: string | null
        }
        Insert: {
          brand?: number | null
          id?: number
          image_urls?: string[] | null
          manufacturer_code?: string | null
          name: string
          on_sale?: boolean
          original_price: number
          price: number
          quantity?: number
          sku: string
          specifications?: Json | null
          variants?: Json | null
        }
        Update: {
          brand?: number | null
          id?: number
          image_urls?: string[] | null
          manufacturer_code?: string | null
          name?: string
          on_sale?: boolean
          original_price?: number
          price?: number
          quantity?: number
          sku?: string
          specifications?: Json | null
          variants?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "product_brand_fkey"
            columns: ["brand"]
            isOneToOne: false
            referencedRelation: "brand"
            referencedColumns: ["id"]
          },
        ]
      }
      product_category: {
        Row: {
          category_id: number
          product_id: number
        }
        Insert: {
          category_id: number
          product_id: number
        }
        Update: {
          category_id?: number
          product_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "product_category_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_category_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
        ]
      }
      user: {
        Row: {
          company_name: string | null
          created_at: string
          email_address: string
          first_name: string | null
          id: number
          is_admin: boolean
          is_company: boolean
          last_name: string | null
          password_hash: string
          phone_number: string
        }
        Insert: {
          company_name?: string | null
          created_at?: string
          email_address: string
          first_name?: string | null
          id?: number
          is_admin?: boolean
          is_company?: boolean
          last_name?: string | null
          password_hash: string
          phone_number: string
        }
        Update: {
          company_name?: string | null
          created_at?: string
          email_address?: string
          first_name?: string | null
          id?: number
          is_admin?: boolean
          is_company?: boolean
          last_name?: string | null
          password_hash?: string
          phone_number?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      name_sku: {
        Args: {
          "": unknown
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
